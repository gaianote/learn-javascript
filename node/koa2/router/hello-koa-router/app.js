var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router.get('/', async (ctx, next) =>{
  ctx.body = 'we are at home!';
});

router.get('/:users', async (ctx, next) =>{
  ctx.body = 'hello ' + ctx.params.users;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000)