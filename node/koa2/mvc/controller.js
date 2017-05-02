controller = function (router) {
  foo = require('./controller/index')
  foo(router)
  sub = require('./controller/user')
  sub(router)
}

module.exports = controller