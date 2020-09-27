const mongoose=require('./connect');

const user={
  name:String,
  email:String
};

const usermodel=mongoose.model('user',user);

module.exports=usermodel;
