var Sequelize = require('sequelize');
module.exports = {'name':'bilan', 'define':{
    'uname': {
      'type':Sequelize.STRING(64),
      'unique': true
    },
    'upwd': Sequelize.STRING(64),
    'type': Sequelize.STRING(64),
    'isused': Sequelize.BOOLEAN,
  }
}
