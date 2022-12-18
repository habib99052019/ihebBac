const express = require('express')
//body parser
var bodyParser = require('body-parser');

const path = require('path');
const multer = require('multer');



console.log('produit')
const app = express();
//app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
//app.use(bodyParser.json())
app.use(express.json({ extended: false, limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }))

const connect = require('./dataBase/connect')

const produitApi=require('./catlogue/routes/produitApi')
const catigorieApi = require('./catlogue/routes/catigorieApi')
const sousCatigorieApi=require('./catlogue/routes/sousCatigorieApi')
const userApi= require('./catlogue/routes/userApi')
const emailApi= require('./catlogue/routes/emailApi')
const vila = require('./catlogue/routes/vilaApi')
const appr= require('./catlogue/routes/appApi')
const off= require('./catlogue/routes/off-plan')
const rent= require('./catlogue/routes/rentApi')
//activer les api
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


//routes

app.use('/produit',produitApi);
app.use('/catigorie',catigorieApi)
app.use('/sousCat',sousCatigorieApi);
app.use('/email',emailApi);
app.use('/todo',userApi);
app.use('/off',off);
app.use('/vila',vila);
app.use('/appr',appr);
app.use('/rent',rent);

//port
const port = process.env.POR || 5900
//multer
var name=""
app.use('/uploads/', express.static(path.join(__dirname, '/uploads')));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
        console.log(file);
    },
    filename: (req, file, cb) => {
      name = Date.now() + file.originalname //path.extname(file.originalname);
        console.log(file);
        console.log(name);
        cb(null, name);
    }
});
const fileFilter = (req, file, cb) => {
    cb(null, true);
   /* if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/pdf') {
        cb(null, true);
    } else {
        cb(null, false);
    }*/
}
const upload = multer({ storage: storage, fileFilter: fileFilter });

//Upload route
app.post('/upload', upload.single('image'), (req, res, next) => {
    try {
        /*return res.status(201).json({
            message: 'File uploded successfully'
        });*/
        return res.status(201).json({
            message: 'File uploded successfully',
            source:'https://heart-of-carthage-dubai.com/backend/uploads/'+name,
            name:name
        });
        
    } catch (error) {
        console.error(error);
    }
});
//fin multer
app.listen(port,()=>console.log(`Server listen on the port`,port)) ;

//port

