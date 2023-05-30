const express = require('express');
const { validarJWT } = require('../middleware/validar-token');
const router = express.Router();
const { check } = require("express-validator");
const { validarCampos } = require("../middleware/validar-campos.js");
const {   addPublication,
    getPublications,
    getPublicacionesPorId,
    deletePublication,
    addLike,
    addFriend,
    getFriends,
    deleteFriend} = require('../Controllers/social');

router.use(validarJWT);

router.post('/addPublication', addPublication);
router.post('/getPublicacionesPorId', getPublicacionesPorId);
router.post('/addFriend', addFriend);
router.post('/getFriends', getFriends);

router.get('/getPublications', getPublications);
//no funcionan
router.delete('/deletePublication/:id', deletePublication);
router.put('/addLike/:id', addLike);

router.get('/getFriends/:userId', getFriends);
router.delete('/deleteFriend/:userId/:friendId', deleteFriend);

module.exports = router;