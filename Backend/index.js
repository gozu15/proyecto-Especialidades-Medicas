'use strict'
const app = require('./app.js')
const mongoose = require('mongoose');

const usuarioRouter = require('./routes/usuario.route');
const professionRouter = require('./routes/profession.route');
const diaryMedicRouter = require('./routes/diarymedic.route');
const makeinquiry = require('./routes/makeinquiry.route');
const consultingroom = require('./routes/consultingroom.route');

app.use('/api/usuarios',usuarioRouter);
app.use('/api/professions',professionRouter);
app.use('/api/diarymedic',diaryMedicRouter);
app.use('/api/makeinquiry',makeinquiry);
app.use('/api/consultingroom',consultingroom);


//const http = require('http');
//.Server(app)

mongoose.connect('mongodb://localhost/ejemplodbMongo', {useNewUrlParser: true},(error)=>{
    if(error)
    {
        console.log("error", error);
    }
    else{
        console.log("conexion a la base de datos");
        app.listen(3000,()=>{
            console.log("servidor abierto en puerto 3000".green);
        })
        // http.listen(3000,()=>{
        //     console.log("servidor abierto en puerto 3000".green);
        // })
    }
});