const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  sousCatigorieSchema= new mongoose.Schema({
    nameSousCat:String,
    imgSousCat:String,
    descCat:String,
    refSouscat:String,
    img:[],
    catigorie:{type: Schema.Types.ObjectId, ref:'catigorie'}
   
    /*sousCatigorie:[{type: Schema.Types.ObjectId, ref:'sousCatigorie'}],*/

   


  });
module.exports=mongoose.model('sousCatigorie',sousCatigorieSchema);