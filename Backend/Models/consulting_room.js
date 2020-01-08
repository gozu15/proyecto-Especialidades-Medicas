'use strict'

const mongoose = require('mongoose');

const schema = mongoose.Schema;


var Consulting_room = new schema({
    name:String,
    description:String,
    photo:String,
    location:{
        physical_address:String,
        longitude:Number,
        latitude:Number
    },
    type_profession:[
        {type: schema.ObjectId, ref: "Profession"}
    ],
    diary:[
        {type: schema.ObjectId, ref: "Diarymedic"}
    ],
    number_license:String   
});

module.exports= mongoose.model('Consultingroom',Consulting_room);