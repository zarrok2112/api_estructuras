const express = require('express');
const { validarJWT } = require('../middleware/validar-token');
const router = express.Router();
const { check } = require("express-validator");
const { validarCampos } = require("../middleware/validar-campos.js");
const {   addPublication,
    getPublications,
    deletePublication,
    addLike,
    addFriend,
    getFriends,
    deleteFriend} = require('../Controllers/social');

router.use(validarJWT);

router.post('/addPublication', addPublication);
router.get('/getPublications', getPublications);
router.delete('/deletePublication/:id', deletePublication);
router.put('/addLike/:id', addLike);
router.put('/addFriend/:userId/:friendId', addFriend);
router.get('/getFriends/:userId', getFriends);
router.delete('/deleteFriend/:userId/:friendId', deleteFriend);

module.exports = router;