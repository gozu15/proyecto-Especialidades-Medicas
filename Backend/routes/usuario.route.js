const express = require('express');

const router = express.Router();

const usuarioController = require('../Controllers/UsuariosController');

router.get('/',usuarioController.readUser);
router.get('/:id',usuarioController.readUserByID);
router.post('/',usuarioController.createUser);
router.put('/:id',usuarioController.updateUser);
router.delete('/:id',usuarioController.deleteUser);

module.exports=router;
