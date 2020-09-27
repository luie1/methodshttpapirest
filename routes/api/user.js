const User=require('../../database/user');
const express=require('express');
const empty=require('is-empty');
const router=express.Router();

router.get('/',async(req,res)=>{
    res.json(await User.find());
});

router.post('/',async(req,res)=>{
    let ins=new User(req.body);
    let result=await ins.save();
    if(empty(result)){
      res.json({message:'algo ocurrio'});
    }else{
      res.json({message:'usuario insertado'});
    }
});

router.patch('/:id',(req,res)=>{
    let id=req.params.id;
    User.findByIdAndUpdate(id,req.body,()=>{
      res.json({message:'ussuario actualizado'});
    });
});

router.delete('/:id',(req,res)=>{
    let id=req.params.id;
    User.findByIdAndRemove(id,()=>{
      res.json({message:'ussuario eliminado'});
    });
});

module.exports=router;
