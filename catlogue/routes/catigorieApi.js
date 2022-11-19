
const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const catigorieSchema = require('../models/catigorieSchema')
//jjjj
//habib
const sousCatigorieSchema = require('../models/sousCatigorieSchema')

console.log(5)

router.post('/catigorieC', async (req, res) => {
    console.log(5)
 
    var cat =  await  catigorieSchema.create(req.body)
    console.log(cat,"catigorie")
    res.send(cat)
  

})

router.get('/catigorie/:id', async (req, res) => {
    console.log("habib")
  var catigorie=  await catigorieSchema.findById(req.params.id)
   res.send(catigorie)
  

})

router.get('/catigorie', async (req, res) => {
  console.log("habib")
var catigories=  await catigorieSchema.find()
 res.send(catigories)


})
//get avec sous catigorie
router.get('/catigorieAndSous', async (req, res) => {
  console.log("habib")
 var cat= await  catigorieSchema.find().populate('sousCatigorie')
 console.log(cat,'rt')
 res.send(cat)


})
router.put('/modifDemandeCat/:id', async (req, res) => {
  

  console.log(req.params.id);
  var  prod = await catigorieSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
 
  res.send({message:true})
})

router.delete('/catDelet/:id', async (req, res) => {

  const groupDelete = await catigorieSchema.deleteOne({ _id: req.params.id }).then(async (group) => {
    var prods = await catigorieSchema.find();
    res.send(prods)
  })


});
   //push sous catigories
   router.post('/pushDemandesbou/:idcatigorie/:idsousCatigorie' , async (req, res) => {
  
        
           
    await     catigorieSchema.findByIdAndUpdate({ _id:idcatigorie}, { $push: {  sousCatigorie: req.params.idsousCatigorie } }).then(async (cat) => {
     
    var catcreate= await catigorieSchema.findOne({ _id: idcatigorie }).populate('sousCatigorie')
    return res.send({mes:true})
   
            });

 

      

 

})
   
    module.exports = router;
    



