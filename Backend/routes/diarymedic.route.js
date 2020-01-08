const express = require('express');

const router = express.Router();

const diaryController = require('../Controllers/DiaryMedicController');

router.get('/',diaryController.readDiarymedic);
router.get('/complete',diaryController.readDiarymedicwithInquiry);
router.get('/:id',diaryController.readDiarymedicwithInquirybyID)
router.post('/',diaryController.createDiarymedic);
router.post('/addpacientes',diaryController.addinquiryToDiarymedic)
router.put('/:id',diaryController.updateDiarymedic);
router.delete('/:id',diaryController.deleteDiarymedic);

module.exports=router;