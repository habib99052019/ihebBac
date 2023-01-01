const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  vilaSchema= new mongoose.Schema({
  title:String,
  stitle:String,
  desc:String,
  prix:String,
  prixFinal:String,
  room:String,
  bath:String,
  bed:String,
  surface:String,
  carc:[],
  lng:Number ,
  lat:Number,
  imageProfil:String,
  imgs:[],
  video:String


   


  });
module.exports=mongoose.model('vila',vilaSchema);