const { Nuxt } = require('nuxt');
const app = require('express')();
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.set('port', port);

const config = require('./nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

app.get('/_ah/health', (req, res) => {
  res.status(200);
  res.send();
});

const nuxt = new Nuxt(config);
app.use(nuxt.render);

app.listen(port, host);
console.log('Server listening on ' + host + ':' + port);
