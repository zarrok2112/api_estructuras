const express = require('express');
const router = express.Router();
const { check } = require("express-validator")
const { validarCampos } = require("../middleware/validar-campos.js")
const { crearUsuario, login, renewToken } = require('../Controllers/auth');
const { validarJWT } = require('../middleware/validar-token.js')

router.post(
    '/new'
    , [
        check("name", "El nombre es obligatorio").not().isEmpty(),
        check("email", "El email es obligatorio").isEmail(),
        check("password", "El password debe de ser de 8 caracteres").isLength({ min: 8 }),
        validarCampos
    ],
    crearUsuario)
router.put('/renew', renewToken, validarJWT);

router.get('/', login);

module.exports = router;
