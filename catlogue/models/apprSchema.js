const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  appSchema= new mongoose.Schema({
  title:String,
  stitle:String,
  desc:String,
  prix:String,
  prixFinal:String,
  imageProfil:String,
  imgs:[],
  video:String



   


  });
module.exports=mongoose.model('app',appSchema);