const express = require('express');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario')

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
        await usuario.save();

        res.status(200).json({
            ok: true,
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
    return res.json({
        ok: true,
        msg: 'login'
    });
}

const renewToken = async(req, res = express.response) => {
    return res.json({
        ok: true,
        msg: 'renew'
    });
}

module.exports = {
    crearUsuario,
    login,
    renewToken
}
