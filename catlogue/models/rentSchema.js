const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  rentSchema= new mongoose.Schema({
  title:String,
  stitle:String,
  desc:String,
  prix:String,
  room:String,
  bath:String,
  bed:String,
  surface:String,
  prixFinal:String,
  carc:[],
  imageProfil:String,
  lng:Number ,
  lat:Number,
  imgs:[],
  video:String



  });
module.exports=mongoose.model('rent',rentSchema);