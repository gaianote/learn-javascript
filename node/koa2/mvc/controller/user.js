const homepage = async (ctx, next) =>{
  ctx.body = 'hello user!';
}

module.exports = {
    'GET /:user': homepage
};