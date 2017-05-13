const Sequelize = require('sequelize');

module.exports = {'name':'bilibili', 'define':{
    'uname': {
      'type':Sequelize.STRING(64),
      'unique': true
    },
    'upwd': Sequelize.STRING(64),
    'isused': Sequelize.BOOLEAN,
  }
}
