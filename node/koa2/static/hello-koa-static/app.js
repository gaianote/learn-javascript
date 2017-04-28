const Koa = require('koa');
const app = new Koa();

const nunjucks = require('nunjucks');
nunjucks.configure('views', { autoescape: true });

const serve = require('koa-static');
app.use(serve(__dirname + '/static'));

app.use(async (ctx,next)=>{
  if (ctx.path === '/') {
    ctx.body = nunjucks.render('index.html', { title: 'hello koa-static' })
  } else {
    await next;
  }
})

app.listen(3000);
