'use strict'

const mongoose = require('mongoose');

const schema = mongoose.Schema;
//var Patient= require('./usuarios').schema;
var Diary_medic = new schema({    
    creation_date:Date,
    modification_date:Date,      
    doctor_id:{type: schema.ObjectId, ref: "User"},
    patients:[{type: schema.ObjectId, ref: "Makeinquiry"}],
    delete_date:{date:Date,status:Boolean},
    year:String
    
});

module.exports= mongoose.model('Diarymedic',Diary_medic);