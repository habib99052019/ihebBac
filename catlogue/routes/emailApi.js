const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();


router.post('/send-mail1',async (req, res) => {
   
   text="*"+ req.body.name+"*" +req.body.email + '*'+ req.body.phone+"*"+req.body.typRef+"*"+req.body.typM+"*"+req.body.typB+"*"+req.body.date+"*"
   req.body.country+"*"
  

    const mailOptions = {
        from:"hearth.Of.carthage90@outlook.fr",
        to:"Contact@heartofcarthage.com" ,
        subject: 'حريف جديد',
        text:text
        
    };
   
    // email transport configuration

    var transport = nodemailer.createTransport({
        maxConnections: 3, //<-----------ADD THIS LINE
        pool: true,
       
        host: "smtp-mail.outlook.com", // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587, // port for secure SMTP
        
  secure: false,
  ignoreTLS:  false,
  requireTLS: false,
  connectionTimeout:  5000,
  greetingTimeout: 5000,
  socketTimeout: 5000, // port for secure SMTP
        tls: {
            rejectUnauthorized: false
        }
        ,

        auth: {
            user:  "hearth.Of.carthage90@outlook.fr",
            pass: "5h5a171078" //"5qtztsuwozbbnrmcm"
        }
    });
    // send email
    try{
        await transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.reponse);
                res.json({message: "email send sucessfully"});
            }
        });
    }catch(err){
        console.log(err);
        
      }
  
});
module.exports = router;