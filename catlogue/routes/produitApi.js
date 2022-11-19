
const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const produitSchema = require('../models/produitSchema')



router.post('/produitC/:idSousCat', async (req, res) => {
  var prod=await produitSchema.findOne ({ refProd:req.body.refProd})
  console.log(prod,"zz")
  if(!prod){
    
    
   if(req.body.verifSousCat ){
    var productCreatec = await  produitSchema.create(req.body)
    productCreatec.sousCatigorie=req.params.idSousCat
    
     await productCreatec.save()
       console.log(productCreatec,"test")
   }
   if(!req.body.verifSousCat ){
    var productCreatec = await  produitSchema.create(req.body)
   }
    //var produit=await produitSchema.findOne ({ refProd:req.body.refProd}).populate('catigorie').populate('sousCatigorie')
    res.send({productCreatec ,Message:true})
  }
else{
  res.send({Message:false})
}
  

})

router.get('/produit/:id', async (req, res) => {
    console.log("habib")
  var produit=  await produitSchema.findById(req.params.id)
   res.send(produit)
  

})

router.get('/produit', async (req, res) => {
  console.log("habib")
var produits=  await produitSchema.find()
 res.send(produits)


})
router.put('/modifDemandeP/:id', async (req, res) => {
  

  console.log(req.params.id);
  var  prod = await produitSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
 
  res.send({message:true})
})

router.delete('/ProdDelet/:id', async (req, res) => {

  const groupDelete = await produitSchema.deleteOne({ _id: req.params.id }).then(async (group) => {
    var prods = await produitSchema.find();
    res.send(prods)
  })


});
   
 /*var  user  =new userSchema({
           nom:req.params.nom,
         age:req.params.age     //tu peut creer d'apres les parametres /:nom/:age en api de poste
      
   })    
    /*  user = await userSchema.create(user);*/
   
    module.exports = router;
    



