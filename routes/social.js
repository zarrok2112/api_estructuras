const express = require('express');
const router = express.Router();
const { check } = require("express-validator")
const { validarCampos } = require("../middleware/validar-campos.js")
const { validarJWT } = require('../middleware/validar-token.js')
const {   addPublication,
    getPublications,
    deletePublication,
    addLike,
    addFriend,
    getFriends,
    deleteFriend } = require('../Controllers/social');

router.post(
    '/registrar'
    , [
        check("name", "El nombre es obligatorio").not().isEmpty(),
        check("email", "El email es obligatorio").isEmail(),
        check("password", "El password debe de ser de 8 caracteres").isLength({ min: 8 }),
        validarCampos
    ],
    addPublication)

module.exports = router;
