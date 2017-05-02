const Koa = require('koa');
const app = new Koa();

const nunjucks = require('nunjucks');
nunjucks.configure('views', { autoescape: true });

const serve = require('koa-static');
app.use(serve(__dirname + '/static'));

const controller = require('./controller')
app.use(controller())

app.listen(3000);
