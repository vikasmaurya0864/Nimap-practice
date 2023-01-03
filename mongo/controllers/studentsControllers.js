const models = require('../models/studentsModel');

exports.createStudents = async(req,res)=>{
    try{
        const response = await models.create(req.body);
        res.send({result:response});
    }
    catch(err){
        console.log(err);
    }
}
exports.getStudents = async(req,res)=>{
    try{
        const response = await models.find();
        res.send({result:response});
    }
    catch(err){
        return console.log(err);
    }
}
exports.updateStudents = async(req,res)=>{
    try{
        const userId = req.params.id;
        const data = req.body;
        const response  = await models.findOneAndUpdate({_id:userId},data,{new:true});
        res.send({result:response});
    }
    catch(err){
       return console.log(err);
    }
}
exports.deleteStudents = async(req,res)=>{
    try{
        const userId  = req.params.id;
        const response = await models.deleteOne({_id:userId})
        res.send({result:response})
    }
    catch(err){
      return  console.log(err);
    }
}