'use strict'
var Profession= require('../Models/profession')


function createProfession (req,res){
    var profession= new Profession;
    var data = req.body;

    console.log(data);    

    profession.name_profession = data.name_profession;
    profession.especiality= data.especiality;
    profession.description = data.description;   
    

    profession.save((error,profession_registrated)=>{
        if(error)
        {
            console.log("error");
        }
        else{
            res.status(200).send(profession_registrated);
            //res.send({message:"dato guardado"});
        }
    }); 

}

function readProfession(req,res)
{    
      Profession.find((error,data)=>{
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

function updateProfession(req,res){    

    var data= req.body;
  
    Profession.updateOne( {_id:req.params.id} ,data, (error,professionnew) =>{
        console.log(req.params.id);

        if(error)
        {
            res.status(500).send({message:"error al actualizar"});
            console.log(error);
        }
        else{
            res.status(200).send({dataupdate:professionnew ,message:"datos guardados"});
        }
    });
    
}

function deleteProfession(req,res){
    var data = req.body;

    Profession.deleteOne({_id:req.params.id}, (error,professiondelete) =>{
        if(error){
            res.status(500).send({message:"error al borrar"});
            console.log(error);
        }
        else{
            res.status(200).send({datadelete:professiondelete, message:"datos borrados"});
        }
    });
}

module.exports={
    createProfession,
    readProfession,
    updateProfession,
    deleteProfession
}