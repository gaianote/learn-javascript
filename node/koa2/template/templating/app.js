const Koa = require('koa');
const app = new Koa();
const templating = require('./templating')

const isProduction = true;

// 初始化 templating

app.use(templating('views', {
    noCache: true,
    watch: true
}));

// 解析模板

app.use(async (ctx,next) => {
  ctx.render('hello.html',{name:'templating'})
});

app.listen(3000);
