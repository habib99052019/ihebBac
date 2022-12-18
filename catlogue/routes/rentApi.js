
const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const rentSchema = require('../models/rentSchema.js')
//jjjj
//habib
//hh


router.post('/creat', async (req, res) => {
    console.log(5)
 
    var cat =  await  rentSchema.create(req.body)
    console.log(cat,"rent")
    res.send(cat)
  

})

router.get('/:id', async (req, res) => {
    console.log("habib")
  var rent=  await rentSchema.findById(req.params.id)
   res.send(rent)
  

})

router.get('/', async (req, res) => {
  console.log("habib")
var rents=  await rentSchema.find()
 res.send(rents)


})
//get avec sous rent

router.put('/modif/:id', async (req, res) => {
  

  console.log(req.params.id);
  var  prod = await rentSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
 
  res.send({message:true})
})

router.delete('/Delet/:id', async (req, res) => {

  const groupDelete = await rentSchema.deleteOne({ _id: req.params.id }).then(async (group) => {
    var prods = await rentSchema.find();
    res.send(prods)
  })


});
   //push sous rents
//    router.post('/pushDemandesbou/:idrent/:idsousrent' , async (req, res) => {
  
        
           
//     await     rentSchema.findByIdAndUpdate({ _id:idrent}, { $push: {  sousrent: req.params.idsousrent } }).then(async (cat) => {
     
//     var catcreate= await rentSchema.findOne({ _id: idrent }).populate('sousrent')
//     return res.send({mes:true})
   
//             });

 

      

 

// })
//getHome
router.get('/home', async (req, res) => {
    console.log("habib")
  var rents=  await rentSchema.find().lean()
  var rentHome=rents.slice(0,6)
   res.send(rentHome)
  
  
  })
   
    module.exports = router;
    



