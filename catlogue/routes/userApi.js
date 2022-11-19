
const express = require('express')
const router = express.Router();

const userSchema = require('../models/userSchema')
router.get('/', async (req, res) => {
     
    var users = await userSchema.find();
     res.send(user);
 });
 router.post('/c', async (req, res) => {
   console.log("habibbbbb")
    var users = await userSchema.create(req.body)
     res.send(users);
 });

 module.exports = router;
 