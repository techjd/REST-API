const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/postManagerDB', {useNewUrlParser:true,useUnifiedTopology:true} ,
err => {
    if (!err) {
        console.log('MongoDB Connection Successful')
    }
    else
    console.log('Error While Connection ' + JSON.stringify(err,undefined,2))
})