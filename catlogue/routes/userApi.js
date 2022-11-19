
const express = require('express')
const router = express.Router();

const userSchema = require('../models/userSchema')
router.get('/', async (req, res) => {
     
    var user = await userSchema.find();
     res.send(user);
//aaaa
 });
 router.post('/c', async (req, res) => {
   console.log("habibbbbb")
    var users = await userSchema.create(req.body)
     res.send(users);
 });

 module.exports = router;
 