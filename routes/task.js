const express = require('express')
const router = express.Router();
const { validarJWT } = require('../middleware/validar-token')
const { listarTasks, crearTask, actualizarTask, eliminarTask } = require('../Controllers/Task')

router.use(validarJWT)

router.get('/', listarTasks)
router.post('/', crearTask)
//router.put('/:id', actualizarTask)
//router.delete('/:id', eliminarTask)

module.exports = router;