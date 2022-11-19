const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  produitSchema  = new mongoose.Schema({
    nameProd:String,
    date:String,
    datSeconde:Number,
    imgProd:[],
    nouveaux:Boolean,
    promo:Boolean,
    valeurProm:Number,
    stock:Boolean,
    quantite:Number,
    coleur:String,
    carcterstique:[],
    verifSousCat:Boolean,
    descProd:String,
    refProd:String,
    prixProd:Number,
    photoProd:String,
    sex:String,
    img:String,
    promo:Number,
    type:String,
    sousCatigorie:{type: Schema.Types.ObjectId, ref:'sousCatigorie'},
    catigorie:{type: Schema.Types.ObjectId, ref:'catigorie'} 
   


  });
module.exports=mongoose.model('produit',produitSchema);