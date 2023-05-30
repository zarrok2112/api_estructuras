const {Schema, model} = require('mongoose')

const UsuarioScheme = Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        select: false
    }
},{
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
})

UsuarioScheme.virtual('tareas',{
    ref: 'Task',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})

module.exports = model('Usuario', UsuarioScheme)