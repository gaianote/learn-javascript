const fs = require('fs');
const Sequelize = require('sequelize');
const config = require('./config')

//链接数据库
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// 自动导入所有的 Model
module.exports = {};

let files = fs.readdirSync(__dirname + '/models');
for (let file of files) {
    console.log(`import model from file ${file}...`);
    let name = file.substring(0, file.length - 3);
    model = require(__dirname + '/models/' + file);
    module.exports[name] = sequelize.define(model['name'],model['define'])
}

module.exports.sync = () => {
    return  sequelize.sync();
};
