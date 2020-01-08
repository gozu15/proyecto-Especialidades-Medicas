const express = require('express');

const router = express.Router();

const professionController = require('../Controllers/ProfessionController');

router.get('/',professionController.readProfession);
router.post('/',professionController.createProfession);
router.put('/:id',professionController.updateProfession);
router.delete('/:id',professionController.deleteProfession);

module.exports=router;
