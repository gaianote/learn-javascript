const fs = require('fs')
const Router = require('koa-router');
const router = new Router();


function add_rule(router, rule) {
    for (let key in rule) {
        if (key.startsWith('GET ')) {
            let path = key.substring(4);
            router.get(path, rule[key]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (key.startsWith('POST ')) {
            let path = key.substring(5);
            router.post(path, rule[key]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${key}`);
        }
    }
}

function add_rules(router) {
    // 得到 /controller 所有以js结尾的文件
    let files = fs.readdirSync(__dirname + '/controller');
    let js_files = files.filter((f) => {
        return f.endsWith('.js');
    });

    // 添加规则
    for (let f of js_files) {
        console.log(`process controller: ${f}...`);
        let rule = require(__dirname + '/controller/' + f);
        add_rule(router, rule);
    }
}

module.exports = function () {
    add_rules(router);
    return router.routes();
};