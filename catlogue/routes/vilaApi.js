
const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const vilaSchema = require('../models/vilaSchema.js')
//jjjj
//habib
//hh


router.post('/creat', async (req, res) => {
    console.log(5)
 
    var cat =  await  vilaSchema.create(req.body)
    console.log(cat,"vila")
    res.send(cat)
  

})

router.get('/:id', async (req, res) => {
    console.log("habib")
  var vila=  await vilaSchema.findById(req.params.id)
   res.send(vila)
  

})

router.get('/', async (req, res) => {
  console.log("habib")
var vilas=  await vilaSchema.find()
 res.send(vilas)


})
//get avec sous vila

router.put('/modif/:id', async (req, res) => {
  

  console.log(req.params.id);
  var  prod = await vilaSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
 
  res.send({message:true})
})

router.delete('/Delet/:id', async (req, res) => {

  const groupDelete = await vilaSchema.deleteOne({ _id: req.params.id }).then(async (group) => {
    var prods = await vilaSchema.find();
    res.send(prods)
  })


});
   //push sous vilas
//    router.post('/pushDemandesbou/:idvila/:idsousvila' , async (req, res) => {
  
        
           
//     await     vilaSchema.findByIdAndUpdate({ _id:idvila}, { $push: {  sousvila: req.params.idsousvila } }).then(async (cat) => {
     
//     var catcreate= await vilaSchema.findOne({ _id: idvila }).populate('sousvila')
//     return res.send({mes:true})
   
//             });

 

      

 

// })
   //getHome
router.get('/home', async (req, res) => {
    console.log("habib")
  var vilas=  await vilaSchema.find().lean()
  var vilaHome=vilas.slice(0,5)
   res.send(vilaHome)
  
  
  })
    module.exports = router;
    



