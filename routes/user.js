const express = require('express');
const { validarJWT } = require('../middleware/validar-token');
const router = express.Router();
const { check } = require("express-validator");
const { validarCampos } = require("../middleware/validar-campos.js");
const {listarUsuarios} = require('../Controllers/User');


router.use(validarJWT);

router.get('/listarUsuarios', listarUsuarios);

module.exports = router;