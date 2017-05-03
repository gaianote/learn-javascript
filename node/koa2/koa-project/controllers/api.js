const model = require('../model');
const APIError = require('../rest').APIError;

let
    Pet = model.Pet,
    User = model.User;

module.exports = {
    'GET /api/pets': async (ctx, next) => {
        var pets = await Pet.findAll();
        ctx.rest({
            'pets': pets
        });
    },

    'DELETE /api/pets': async (ctx, next) => {

    }
};
