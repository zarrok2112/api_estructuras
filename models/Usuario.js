const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema({

    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
        select: false
    }

})

module.exports = model('Usuario', UsuarioSchema)