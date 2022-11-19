const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  catigorieSchema= new mongoose.Schema({
    nameCat:String,
    imgCat:String,
    descCat:String,
    refcat:String,
    verifCatAc:Boolean,
    imgs:[],
    sousCatigorie:[{type: Schema.Types.ObjectId, ref:'sousCatigorie'}]

   


  });
module.exports=mongoose.model('catigorie',catigorieSchema);