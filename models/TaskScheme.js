const {Schema, model} = require('mongoose')

const TaskSceheme = Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
})

module.exports = model('Task', TaskSceheme)