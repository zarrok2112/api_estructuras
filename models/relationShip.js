const {schema, model} = require('mongoose');

const RelationShipSchema = schema({
    user: {
        type: schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    friend: {
        type: schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    relationDay: {
        type: Date,
        default: Date.now
    },
});