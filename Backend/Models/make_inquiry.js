'use strict'

const mongoose = require('mongoose');

const schema = mongoose.Schema;
//var Patient= require('./usuarios').schema;
//REALIZAR CONSULTA
var MakeInquiry = new schema({    
    patient_data:{type: schema.ObjectId, ref: "User"},
    iddiaryInquiry:{type: schema.ObjectId, ref: "Diarymedic"},
    initial_consultation_date:Date,
    final_consultation_date:Date,
    type_medication:String,
    description:String      
});

module.exports= mongoose.model('Makeinquiry',MakeInquiry);