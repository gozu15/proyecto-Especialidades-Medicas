const express = require('express');

const router = express.Router();

const inquiryController = require('../Controllers/MakeInquiryController');

router.get('/',inquiryController.readInquiry);
router.get('/:id',inquiryController.readInquiryByID);
router.post('/',inquiryController.createInquiry);
router.put('/:id',inquiryController.updateInquiry);
router.delete('/:id',inquiryController.deteleInquiry);

module.exports=router;