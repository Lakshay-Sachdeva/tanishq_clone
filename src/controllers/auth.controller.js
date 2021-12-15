require("dotenv").config() ;
const User = require('../models/user.model');
const jwt = require("jsonwebtoken") ;

const newToken = (user) => {
    return jwt.sign({ user : user } , process.env.JWT_ACCESS_KEY )
}

const register = async (req , res ) => {
    try{
        let user = await User.findOne({ email : req.body.email }).lean().exec() ;

        if(user){
            return res.status(400).json({ status: "failed" , message: "Email address already exists, Try Logging in."} ) ;
        }

        user = await User.create(req.body) ;

        const token = newToken(user) ;

        // console.log("user" , user , "token" , token );

        return res.status(201).json( { user , token } ) ;
    }
    catch(e){
        return res.status(500).json({ status: "failed" , message: e.message})
    }
    
}


const login = (req , res ) => {



    return res.status(200).send("Login");
}


module.exports = { register , login } ;