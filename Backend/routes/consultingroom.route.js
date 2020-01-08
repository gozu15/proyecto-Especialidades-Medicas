'use strict'
const express = require('express');

const router = express.Router();

const consultingroomController = require('../Controllers/ConsultingRoomController');

router.get('/',consultingroomController.readConsultingroom);
router.get('/complete',consultingroomController.readConsultingroomWithDiary);
router.get('/:id',consultingroomController.readConsultingroomwithdiarybyID)
router.post('/',consultingroomController.createConsultingroom);
router.post('/addprofession',consultingroomController.addProfessionToConsultingroom);
router.post('/adddiary',consultingroomController.addDiaryToConsultingroom);
router.put('/:id',consultingroomController.updateConsultingroom);
router.delete('/:id',consultingroomController.deleteConsultingroom);

module.exports=router;