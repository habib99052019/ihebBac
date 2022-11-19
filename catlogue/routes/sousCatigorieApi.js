console.log("sousCat")

const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const catigorieSchema = require('../models/catigorieSchema')

const sousCatigorieSchema = require('../models/sousCatigorieSchema')






router.post('/creation', async (req, res) => {
    console.log('creer sous catigorie')

             
            
            
             
                
                var sousCat= await  sousCatigorieSchema.create(req.body)
              
                await     catigorieSchema.findByIdAndUpdate({ _id: sousCat.catigorie }, { $push: {  sousCatigorie: sousCat._id } }).then(async(cat) => {
                               console.log(cat.populate('sousCatigorie'),'rryu')
                    var cati = await  catigorieSchema.findOne({ _id: cat._id}).populate('sousCatigorie')
                  
                       console.log(cati,'aunn')
                        
                         res.send({message:true,cat});
             
                   
                
                 
             });
               
           
 

})
router.get('/catigorieAndSous', async (req, res) => {
    console.log("habib")
  var catigories=  await catigorieSchema.find().populate('catigorie')
   res.send(catigories)
  
  
  })
module.exports = router;
    
