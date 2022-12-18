
const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const offSchema = require('../models/offPlanSchema.js')
const userSchema = require('../models/userSchema')
//jjjj
//habib
//hh


router.post('/creat', async (req, res) => {
    console.log(5)
 
    var cat =  await  offSchema.create(req.body)
    console.log(cat,"off")
    res.send(cat)
  

})

router.get('/:id', async (req, res) => {
    console.log("habib")
  var off=  await offSchema.findById(req.params.id)
   res.send(off)
  

})
router.get('/', async (req, res) => {
     
  var user = await offSchema.find();
   res.send(user);
//aaaa
});

//get avec sous off

router.put('/modif/:id', async (req, res) => {
  

  console.log(req.params.id);
  var  prod = await offSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
 
  res.send({message:true})
})

router.delete('/Delet/:id', async (req, res) => {

  const groupDelete = await offSchema.deleteOne({ _id: req.params.id }).then(async (group) => {
    var  offs = await offSchema.find();
    res.send(offs)
  })


});
//getHome
router.get('/home', async (req, res) => {
     
  var user = await offSchema.find().lean();
  var tab  =user.slice(0,5)
   res.send(tab);
//aaaa
});
   //push sous offs
//    router.post('/pushDemandesbou/:idoff/:idsousoff' , async (req, res) => {
  
        
           
//     await     offSchema.findByIdAndUpdate({ _id:idoff}, { $push: {  sousoff: req.params.idsousoff } }).then(async (cat) => {
     
//     var catcreate= await offSchema.findOne({ _id: idoff }).populate('sousoff')
//     return res.send({mes:true})
   
//             });

 

      

 

// })
   
    module.exports = router;
    



