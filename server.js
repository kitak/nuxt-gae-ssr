const { Nuxt, Builder } = require('nuxt');
const app = require('express')();
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.set('port', port);

const config = require('./nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');
const nuxt = new Nuxt(config);

if (config.dev) {
  new Builder(nuxt).build();
}

app.get('/_ah/health', (req, res) => {
  res.status(200);
  res.send();
});

app.use(nuxt.render);

app.listen(port, host);
console.log('Server listening on ' + host + ':' + port);
