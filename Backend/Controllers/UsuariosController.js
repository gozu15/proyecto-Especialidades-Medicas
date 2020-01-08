
'use strict'
var Usuario= require('../Models/usuarios')


function createUser (req,res){

    //EXISTEN DOS TIPOS DE USUARIO: Doctor-Cliente
    var usuario= new Usuario;
    var data = req.body;

    console.log(data);

    usuario.name = data.name;
    usuario.lastname= data.lastname;
    usuario.age = data.age;
    usuario.number_contact = data.number_contact;
    usuario.email = data.email;
    usuario.gender=data.gender;
    usuario.user=data.user;
    usuario.password=data.password;
    usuario.credencial={tipo:data.credencial.tipo,nivel:data.credencial.nivel};
    

    usuario.save((error,usuarioreg)=>{
        if(error)
        {
            console.log("error");
        }
        else{
            res.status(200).send(usuarioreg);
            //res.send({message:"dato guardado"});
        }
    }); 

}

function readUser(req,res)
{    
      Usuario.find((error,data)=>{
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

function readUserByID(req,res)
{    
      Usuario.find({_id:req.params.id})
      .then(data => {
            if(data){
            res.status(200).send(data);
            }
      })
      .catch(error =>{
        if(error){
            res.status(500).send("error, datos vacios");
        }
      });

    //res.status(200).send("test de ingreso a api");

}

function updateUser(req,res){
    

    var data= req.body;
  
    Usuario.updateOne( {_id:req.params.id} ,data, (error,usuarionew) =>{
        console.log(req.params.id);

        if(error)
        {
            res.status(500).send({message:"error al actualizar"});
            console.log(error);
        }
        else{
            res.status(200).send({dataupdate:usuarionew ,message:"datos guardados"});
        }
    });
    
}

function deleteUser(req,res){
    var data = req.body;

    Usuario.deleteOne({_id:req.params.id}, (error,usuarioborrado) =>{
        if(error){
            res.status(500).send({message:"error al borrar"});
            console.log(error);
        }
        else{
            res.status(200).send({datadelete:usuarioborrado, message:"datos borrados"});
        }
    });
}

module.exports={
    createUser,
    readUser,
    readUserByID,
    updateUser,
    deleteUser
}