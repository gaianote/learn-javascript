const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

const nunjucks = require('nunjucks');
nunjucks.configure('views', { autoescape: true });

const serve = require('koa-static');
app.use(serve(__dirname + '/static'));

const controller = require('./controller')
app.use(controller(router))

app.listen(3000);
