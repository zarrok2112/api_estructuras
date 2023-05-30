const {Schema, model} = require('mongoose');

const ComentarioScheme = Schema({
    description: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        ref: 'Usuario',
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    fecha: {
        type: Date,
        default: Date.now
    }
},{
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
})

ComentarioScheme.method('toJSON', function(){
    const {__v, _id, ...object} = this.toObject();
    object.id = _id
    return object
})

module.exports = model('Comentario', ComentarioScheme)
;