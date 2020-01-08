'use strict'
var MakeIinquiry= require('../Models/make_inquiry')


function createInquiry (req,res){
    var inquiry= new MakeIinquiry;
    var data = req.body;

    console.log(data);    
   
    inquiry.patient_data = data.patient_data;
    inquiry.iddiaryInquiry=data.iddiaryInquiry;
    inquiry.initial_consultation_date= data.initial_consultation_date;
    inquiry.final_consultation_date = data.final_consultation_date;   
    inquiry.type_medication = data.type_medication;   
    inquiry.description = data.description;      

    inquiry.save().then(datanew =>{
        console.log(datanew);
        res.status(200).send(datanew);
    })
    .catch(error =>{
        console.log(error);
        res.status(500).send(error);
    }); 

}

function readInquiry(req,res)
{    
    MakeIinquiry.find()
      .then(data =>{
          console.log(data);
          res.status(200).send(data);
      })
      .catch(error =>{
        res.status(500).send("error en el dato",error);
      })

    //res.status(200).send("test de ingreso a api");

}

function readInquiryByID(req,res)
{    
    MakeIinquiry.find({_id:req.params.id})
      .then(data =>{
          console.log(data);
          res.status(200).send(data);
      })
      .catch(error =>{
        res.status(500).send("error en el dato",error);
      })

    //res.status(200).send("test de ingreso a api");

}

function updateInquiry(req,res){    

    var data= req.body;
  
    MakeIinquiry.updateOne( {_id:req.params.id} ,data)
    .then(data =>{
        console.log(data);
        res.status(200).send({dataupdate:data ,message:"datos guardados"});
    })
    .catch(error =>{
        console.log(error);
        res.status(500).send({message:"error al actualizar"});
    });
    
}

function deteleInquiry(req,res){
    var data = req.body;

    MakeIinquiry.deleteOne({_id:req.params.id})
    .then(data =>{
        res.status(200).send({datadelete:data, message:"datos borrados"});
    })
    .catch(error =>{
        res.status(500).send({message:"error al borrar"});
            console.log(error);
    });
}

module.exports={
    createInquiry,
    readInquiry,
    readInquiryByID,
    updateInquiry,
    deteleInquiry
}