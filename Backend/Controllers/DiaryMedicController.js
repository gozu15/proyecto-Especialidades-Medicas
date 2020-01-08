'use strict'
var DiaryMedic= require('../Models/diary_medic')
//var ConsultaPaciente = require('../Models/make_inquiry')


function createDiarymedic (req,res){
    var agenda= new DiaryMedic;
    var data = req.body;
/**creation_date:Date,
    modification_date:Date,      
    doctor_id:{type: Schema.ObjectId, ref: "User"},
    patients:[{type: Schema.ObjectId, ref: "Makeinquiry"}],
    delete_date:Date,
    year:String */
    console.log(data);    

    agenda.creation_date = data.creation_date;
    agenda.modification_date= data.modification_date;
    agenda.doctor_id = data.doctor_id;   
    agenda.patients = [];
    agenda.delete_date = {date:data.delete_date.date,status:data.delete_date.status}; 
    agenda.year = data.year;    
    

    agenda.save((error,agenda_registrada)=>{
        if(error)
        {
            console.log("error");
        }
        else{
            res.status(200).send(agenda_registrada);
            //res.send({message:"dato guardado"});
        }
    }); 

}

function addinquiryToDiarymedic(req,res){
    var agenda= new DiaryMedic;
    var data = req.body;
   
    DiaryMedic.update({_id:data.idagenda},{'$push':{'patients':data.idconsulta}}).then(responce =>{
      
        res.status(200).send(responce);
              
        console.log(responce);
    }).catch(error =>{
        res.status(500).send(error);
        console.log(error);
    })
}

function readDiarymedic(req,res)
{    
      DiaryMedic.find((error,data)=>{
          if(error){
              console.log("error")
              res.status(500).send("error, datos vacios");
          }
          else{
              res.status(200).send(data);
          }
      })

    //res.status(200).send("test de ingreso a api");

}

function readDiarymedicwithInquiry(req,res)
{    
      DiaryMedic.find().populate('patients').then((data) =>{
        
              
        console.log("data",data);
          
            res.status(200).send(data);
          

      }).catch(error =>{
        console.log(error);
              res.status(500).send("error",error)
      })   

}

function readDiarymedicwithInquirybyID(req,res)
{    
      DiaryMedic.find({_id:req.params.id}).populate('patients').then((data) =>{
        
              
        console.log("data",data);
          
            res.status(200).send(data);
          

      }).catch(error =>{
        console.log(error);
              res.status(500).send("error",error)
      })   

}

function updateDiarymedic(req,res){    

    var data= req.body;
  
    DiaryMedic.updateOne( {_id:req.params.id} ,data)
    .then(updatediarymedic =>{
        res.status(200).send({dataupdate:updatediarymedic ,message:"datos guardados"});
    })
    .catch(error =>{
        res.status(500).send({message:"error al actualizar"});
        console.log(error);
    });    
    
}

function deleteDiarymedic(req,res){
    var data = req.body;

    DiaryMedic.deleteOne({_id:req.params.id})
    .then(diaryMedicdelete =>{        
        res.status(200).send({datadelete:diaryMedicdelete, message:"datos borrados"});
    })
    .catch(error =>{
        res.status(500).send({message:"error al borrar"});
        console.log(error);
    })
}

module.exports={
    createDiarymedic,
    addinquiryToDiarymedic,
    readDiarymedic,
    readDiarymedicwithInquiry,
    readDiarymedicwithInquirybyID,
    updateDiarymedic,
    deleteDiarymedic
    
}