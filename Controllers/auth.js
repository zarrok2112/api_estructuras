const express = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = async (req, res = express.Request) => {
    const { name, email, password } = req.body;
    console.log(req.body);

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json(
            {
                ok: false,
                errors: error.mapped()
            }
        )
    }
    try {
        return res.status(200).json({
            ok: true,
            msg: 'registro',
            name,
            email,
            password
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });
    }


    // return res.status(200).json({
    //     ok: true,
    //     msg: 'registro',
    //     name,
    //     email,                                 
    //     password
    // });
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
