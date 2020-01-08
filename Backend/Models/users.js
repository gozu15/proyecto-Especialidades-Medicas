'use strict'

const mongoose = require('mongoose');

const schema = mongoose.Schema;

var Usuarios = new schema({
    name:String,
    photo:String,
    lastname:String,
    age:String,
    number_contact:String,
    email:String,
    gender:String,
    user:String,
    password:String,
    credencial:{
        tipo:String,
        nivel:Number
    }
});

module.exports= mongoose.model('User',Usuarios);