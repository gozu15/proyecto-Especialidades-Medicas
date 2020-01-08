'use strict'

const mongoose = require('mongoose');

const schema = mongoose.Schema;

var Profession = new schema({
    name_profession:String,
    especiality:String,
    description:String
});

module.exports= mongoose.model('Profession',Profession);