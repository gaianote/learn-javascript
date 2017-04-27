const Koa = require('koa');
const app = new Koa();

const nunjucks = require('nunjucks');
nunjucks.configure('views', { autoescape: true });

app.use(ctx => {
  ctx.body = nunjucks.render('child.html', { name: 'nunjucks' })
});
app.listen(3000);
