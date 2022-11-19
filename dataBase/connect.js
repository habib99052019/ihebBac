const mongoose = require('mongoose');

mongoose.connect( 'mongodb+srv://webmaster:webmaster123@cluster0.jc0r9.mongodb.net/tunisieSantté', //    'mongodb://localhost:27017/planE-commerceBase28',
{useNewUrlParser: true, 
useUnifiedTopology: true,

})
.then(()=>console.log('Successfully connected to database.'))
.catch((e)=>console.error('Error in connection',e));

module.exports = mongoose;