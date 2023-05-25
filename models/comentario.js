const {Schema, model} = require('mongoose');

const ComentarioSchema = Schema({
    comentario: {
        type: String,
        required: true
    },
    usuario: {
        type: Number,
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
    }

    
});