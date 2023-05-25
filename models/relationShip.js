const {Schema, model} = require('mongoose');

const RelationShipSchema = Schema({
    user: {
        type: Number,
        ref: 'User',
        required: true
    },
    friend: {
        type: Number,
        ref: 'User',
        required: true
    },
    relationDay: {
        type: Date,
        default: Date.now
    },
});