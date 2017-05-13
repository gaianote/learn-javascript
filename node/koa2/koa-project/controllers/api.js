const model = require('../model');
const APIError = require('../rest').APIError;

const
    Bilibili = model.Bilibili,
    Bilan = model.Bilan

module.exports = {
  /* BiliBili 表 */

    //得到所有的bilibili账号
    'GET /api/bilibilis': async (ctx, next) => {
        let bilibilis = await Bilibili.findAll();
        ctx.rest({
            'bilibilis': bilibilis
        });
    },
    // 得到一个未使用的bilibili账号
    'GET /api/bilibili': async (ctx, next) => {
        let bilibili = await Bilibili.findOne({
          'where': {'isused':false}
        });
        ctx.rest({
            'bilibili': bilibili
        });
    },
    //新建bilibili账号
    'POST /api/bilibili': async (ctx, next) => {
        bilibili = ctx.request.body.bilibili
        bilibili = await Bilibili.create(bilibili)
        ctx.rest({
            'bilibili': bilibili.get({'plain': true})
        });
    },
    //更新bilibili账号
    'PUT /api/bilibili': async (ctx, next) => {
        let bilibili = ctx.request.body.bilibili
        bilibili = await Bilibili.findOne({
          'where': bilibili
        });
        bilibili = await bilibili.update({
          'isused': true
        });
        console.log(user.get({'plain': true}));
    },

    /* Bilan 表  碧蓝航线 */

    //得到所有的bilan账号
    'GET /api/bilans': async (ctx, next) => {
        let bilans = await Bilan.findAll();
        ctx.rest({
            'bilans': bilans
        });
    },
    // 得到一个未使用的bilan账号
    'GET /api/bilan': async (ctx, next) => {
        let bilan = await Bilan.findOne({
          'where': {'isused':false}
        });
        ctx.rest({
            'bilan': bilan
        });
    },
    //新建bilan账号
    'POST /api/bilan': async (ctx, next) => {
        bilan = ctx.request.body.bilan
        bilan = await Bilan.create(bilan)
        ctx.rest({
            'bilan': bilan.get({'plain': true})
        });
    },
    //更新bilan账号 'isused': true
    'PUT /api/bilan': async (ctx, next) => {
        let bilan = ctx.request.body.bilan
        bilan = await Bilan.findOne({
          'where': bilan
        });
        bilan = await bilan.update({'isused': true});
        console.log(bilan.get({'plain': true}));
    },
};
