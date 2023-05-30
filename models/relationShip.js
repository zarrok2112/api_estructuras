const {Schema, model} = require('mongoose');

const RelationShipSchema = Schema({
    user: {
        type: String,
        ref: 'Usuario',
        required: true
    },
    friend: {
        type: String,
        ref: 'Usuario',
        required: true
    },
    relationDay: {
        type: Date,
        default: Date.now
    },
});

module.exports = model('relationShip', RelationShipSchema)