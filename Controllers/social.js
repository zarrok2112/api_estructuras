const ComentarioScheme = require('../models/comentarioScheme');
const Usuario = require('../models/Usuario')
const relationShip = require('../models/relationShip');

const addPublication = async (req, res = express.request) => { 
    const{title, description} = req.body;
    const{uid, name} = req;
    const user = await Usuario.findById(uid);
    const nameUser = user.name;

    try{
        const publication = new ComentarioScheme({
            title: title,
            description: description,
            usuario:uid
        });
        
        await publication.save();

        console.log(uid);
        return res.status(200).json({
            name:nameUser,
            title: title,
            descripcion:description
            });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            ok:false,
            msg:'Error interno'
        })
    }
};

const getPublicacionesPorId = async (req, res) => {
    const{uid} = req;
  
    try {
      const publicaciones = await ComentarioScheme.find({ usuario: uid });
  
      return res.json({
        ok: true,
        publicaciones: publicaciones
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        ok: false,
        msg: 'Error interno'
      });
    }
  };
  
  module.exports = {
    getPublicacionesPorId
  };


const getPublications = async (req, res) => {
    try {
        const publications = await ComentarioScheme.find();
        return res.status(200).json({
            ok: true,
            publications
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error interno'
        });
    }
};
const deletePublication = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedPublication = await ComentarioScheme.findByIdAndDelete(id);

        if (!deletedPublication) {
            return res.status(404).json({
                ok: false,
                msg: 'Publicación no encontrada'
            });
        }

        return res.status(200).json({
            ok: true,
            msg: 'Publicación eliminada correctamente'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error interno'
        });
    }
};
const addLike = async (req, res) => {
    const { publicationId, userId } = req.body;

    try {
        // Verificar si la publicación existe
        const publication = await Publication.findById(publicationId);

        if (!publication) {
            return res.status(404).json({
                ok: false,
                msg: 'Publicación no encontrada'
            });
        }

        // Verificar si el usuario existe
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no encontrado'
            });
        }

        // Agregar el like a la publicación y guardarla
        publication.likes.push(userId);
        await publication.save();

        return res.status(200).json({
            ok: true,
            msg: 'Like agregado correctamente'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error interno'
        });
    }
};

const addFriend = async (req, res) => {
    const { userId, friendId } = req.body;

    try {
        // Verificar si el usuario existe
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no encontrado'
            });
        }

        // Verificar si el amigo existe
        const friend = await User.findById(friendId);

        if (!friend) {
            return res.status(404).json({
                ok: false,
                msg: 'Amigo no encontrado'
            });
        }

        // Agregar el amigo a la lista de amigos del usuario y guardar el usuario
        user.friends.push(friendId);
        await user.save();

        return res.status(200).json({
            ok: true,
            msg: 'Amigo agregado correctamente'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error interno'
        });
    }
};

const getFriends = async (req, res) => {
    const { userId } = req.params;

    try {
        // Verificar si el usuario existe
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no encontrado'
            });
        }

        // Obtener la lista de amigos del usuario
        const friends = await User.find({ _id: { $in: user.friends } });

        return res.status(200).json({
            ok: true,
            friends
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error interno'
        });
    }
};

const deleteFriend = async (req, res) => {
    const { userId, friendId } = req.params;

    try {
        // Verificar si el usuario existe
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no encontrado'
            });
        }

        // Verificar si el amigo existe
        const friend = await User.findById(friendId);

        if (!friend) {
            return res.status(404).json({
                ok
            });
        }
    } catch (error) {
            
        }
    }

    module.exports = {
        addPublication,
        getPublicacionesPorId,
        getPublications,
        deletePublication,
        addLike,
        addFriend,
        getFriends,
        deleteFriend
    }
