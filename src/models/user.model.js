const mongoose = require('mongoose') ;
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    title : { type: String, required: true },
    first_name : { type: String, required: true} ,
    last_name : { type: String, required: true} ,
    contact : { type : Number, required: true } ,
    email : { type: String, required: true},
    password : { type: String, required: true}
} , { 
    versionKey : false,
    timestamps : true
});

userSchema.pre("save" , function (next){
    // console.log(("this" , this.password));

    if(!this.isModified("password")) return next();

    bcrypt.hash("teamTanishq", 10, function(err, hash) {
        // console.log(hash);
        this.password = hash ;
    });
    
    return next();
})



const User = mongoose.model('user' , userSchema) ;

module.exports = User ;