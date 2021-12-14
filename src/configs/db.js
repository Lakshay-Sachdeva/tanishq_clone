const mongoose = require('mongoose');
require("dotenv").config()

const connect = ()=>{
    return mongoose.connect(`mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@cluster0.gk6g4.mongodb.net/test `)
}

module.exports = connect ;