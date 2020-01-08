'use strict'
var Consultingroom= require('../Models/consulting_room')
//var ConsultaPaciente = require('../Models/make_inquiry')


function createConsultingroom (req,res){
    var consultingroom= new Consultingroom;
    var data = req.body;
/**name:String,
    description:String,
    photo:String,
    location:{
        physical_address:String,
        longitude:Number,
        latitude:Number
    },
    type_profession:[
        {type: Schema.ObjectId, ref: "Profession"}
    ],
    diary:[
        {type: Schema.ObjectId, ref: "Diarymedic"}
    ],
    number_license:String   */
    console.log(data);    

    consultingroom.name = data.name;
    consultingroom.description= data.description;
    consultingroom.photo = data.photo;  
    consultingroom.location ={physical:data.location.phisical,
                             longitude:data.location.longitude,
                             latitude:data.location.latitude}; 
    consultingroom.type_profession = [];
    consultingroom.diary = []; 
    consultingroom.number_license=data.number_license;    
    

    consultingroom.save()
    .then(data =>{
        if(data)
        {
            res.status(200).send(data);
        }
    })
    .catch(error =>{
        res.status(500).send(error);
    }); 

}

function addProfessionToConsultingroom(req,res){
   
    var data = req.body;
   
    Consultingroom.update({_id:data.idconsultingroom},{'$push':{'type_profession':data.idprofession}}).then(responce =>{
      
        res.status(200).send(responce);
              
        console.log(responce);
    }).catch(error =>{
        res.status(500).send(error);
        console.log(error);
    })
}

function addDiaryToConsultingroom(req,res){
   
    var data = req.body;
   
    Consultingroom.update({_id:data.idconsultingroom},{'$push':{'diary':data.iddiary}}).then(responce =>{
      
        res.status(200).send(responce);
              
        console.log(responce);
    }).catch(error =>{
        res.status(500).send(error);
        console.log(error);
    })
}

function readConsultingroom(req,res)
{    
      Consultingroom.find((error,data)=>{
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

function readConsultingroomWithDiary(req,res)
{    
      Consultingroom.find().populate('diary').then((data) =>{        
              
        console.log("data",data);          
            res.status(200).send(data);          

      }).catch(error =>{
        console.log(error);
              res.status(500).send("error",error)
      })   

}

function readConsultingroomwithdiarybyID(req,res)
{    
      Consultingroom.find({_id:req.params.id}).populate('diary').then((data) =>{
        
              
        console.log("data",data);
          
            res.status(200).send(data);
          

      }).catch(error =>{
        console.log(error);
              res.status(500).send("error",error)
      })   

}

function updateConsultingroom(req,res){    

    var data= req.body;
  
    Consultingroom.updateOne( {_id:req.params.id} ,data)
    .then(updateconsultingroom =>{
        res.status(200).send({dataupdate:updateconsultingroom ,message:"datos guardados"});
    })
    .catch(error =>{
        res.status(500).send({message:"error al actualizar"});
        console.log(error);
    });    
    
}

function deleteConsultingroom(req,res){
    var data = req.body;

    Consultingroom.deleteOne({_id:req.params.id})
    .then(consultingroomdelete =>{        
        res.status(200).send({datadelete:consultingroomdelete, message:"datos borrados"});
    })
    .catch(error =>{
        res.status(500).send({message:"error al borrar"});
        console.log(error);
    })
}

module.exports={
    createConsultingroom,
    addProfessionToConsultingroom,
    addDiaryToConsultingroom,
    readConsultingroom,
    readConsultingroomWithDiary,
    readConsultingroomwithdiarybyID,
    updateConsultingroom,
    deleteConsultingroom
    
}