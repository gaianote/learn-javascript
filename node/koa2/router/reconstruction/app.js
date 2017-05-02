const controller = require('./controller');
const Koa = require('koa');
const app = new Koa();

app.use(controller())
app.listen(3000)