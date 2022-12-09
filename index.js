const express = require('express')
//body parser
var bodyParser = require('body-parser');

var http = require('http');



console.log('produit')
const app = express();
//app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
//app.use(bodyParser.json())
app.use(express.json({ extended: false, limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }))

app.get('/', (req, res) => {
    res.send('Hello Backend!');
});
const connect = require('./dataBase/connect')

const produitApi=require('./catlogue/routes/produitApi')
const catigorieApi = require('./catlogue/routes/catigorieApi')
const sousCatigorieApi=require('./catlogue/routes/sousCatigorieApi')
const userApi= require('./catlogue/routes/userApi')
const emailApi= require('./catlogue/routes/emailApi')

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
//port
const port = process.env.PORT || 5900;
app.listen(port,()=>console.log(`Server listen on the port ${port}`)) ;

//port

