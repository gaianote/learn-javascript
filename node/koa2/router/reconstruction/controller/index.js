const homepage = async (ctx, next) =>{
  ctx.body = 'we are at home!';
}

module.exports = {
    'GET /': homepage
};