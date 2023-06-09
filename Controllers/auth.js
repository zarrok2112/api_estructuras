const express = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario')
const {generarJWT} = require('../helpers/jwt')

const crearUsuario = async (req, res = express.Request) => {
    const { name, email, password } = req.body;
    try{
        let usuario = await Usuario.findOne({email: email})
        if(usuario){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario con ese correo ya existe'
            })
        }

        usuario = new Usuario(req.body);
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);
        console.log(usuario.password);
        await usuario.save();

        res.status(200).json({
            meg : 'Usuario creado correctamente',
            usuario
        })
    } catch(error){
        console.log(error)
        res.status(500).json({
            ok:false,
            error
        })
    }
};

const login = async(req, res = express.response) => {
    const{email, password} = req.body
    try{
        console.log(email)
        let usuario = await Usuario.findOne({email}).select('+password')
        if(!usuario){
            return res.status(400).json({
                ok:false,
                msg:'El usuario NO existe'
            })
        }
        const passwordValid = bcrypt.compareSync(password, usuario.password);
        if(!passwordValid){
            return res.status(400).json({
                ok:false,
                msg:'La contraseña NO es valido'
                
            })
        }
        const token = await(generarJWT(usuario.id, usuario.name))

        res.status(200).json({
            ok: true,
            token,
            id:usuario.id,
            name:usuario.name,
            email:usuario.email
        })
    } catch(error){
        console.log(error)
        res.status(500).json({
            ok:false,
            error
        })
    }
}

const renewToken = async(req, res = express.response) => {
    const {uid, name} = req

    const token = await(generarJWT(uid, name))

    res.json({
        ok:true,
        token
    })
}

module.exports = {
    crearUsuario,
    login,
    renewToken
}
