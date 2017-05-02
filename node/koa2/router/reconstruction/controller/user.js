const user = async (ctx, next) => {
  ctx.body = 'hello ' + ctx.params.user;
}

module.exports = {
    'GET /:user': user
};