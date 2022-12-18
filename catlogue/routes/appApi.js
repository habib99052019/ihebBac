
const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const appSchema = require('../models/apprSchema.js')
//jjjj
//habib
//hh


router.post('/creat', async (req, res) => {
    console.log(5)
 
    var cat =  await  appSchema.create(req.body)
    console.log(cat,"app")
    res.send(cat)
  

})

router.get('/:id', async (req, res) => {
    console.log("habib")
  var app=  await appSchema.findById(req.params.id).lean()
   res.send(app)
  

})

router.get('/', async (req, res) => {
  console.log("habib")
var apps=  await appSchema.find()
 res.send(apps)


})
//get avec sous app

router.put('/modif/:id', async (req, res) => {
  

  console.log(req.params.id);
  var  prod = await appSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
 
  res.send({message:true})
})

router.delete('/Delet/:id', async (req, res) => {

  const groupDelete = await appSchema.deleteOne({ _id: req.params.id }).then(async (group) => {
    var prods = await appSchema.find();
    res.send(prods)
  })


});
//getHome
router.get('/home', async (req, res) => {
    console.log("habib")
  var apps=  await appSchema.find().lean()
  var appHome=apps.slice(0,6)
   res.send(appHome)
  
  
  })
   //push sous apps
//    router.post('/pushDemandesbou/:idapp/:idsousapp' , async (req, res) => {
  
        
           
//     await     appSchema.findByIdAndUpdate({ _id:idapp}, { $push: {  sousapp: req.params.idsousapp } }).then(async (cat) => {
     
//     var catcreate= await appSchema.findOne({ _id: idapp }).populate('sousapp')
//     return res.send({mes:true})
   
//             });

 

      

 

// })
   
    module.exports = router;
    



