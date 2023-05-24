const {schema, model} = require('mongoose');

const ComentarioSchema = schema({
    comentario: {
        type: String,
        required: true
    },
    usuario: {
        type: schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    post: {
        type: schema.Types.ObjectId,
        ref: 'Post',
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