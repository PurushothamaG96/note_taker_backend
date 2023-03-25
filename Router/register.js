const express = require("express")
const router = express.Router()
const userModel = require("../models/users")
const bcrypt = require("bcrypt")


router.use(express.json())
router.use(express.urlencoded())


router.post("/register", async(req, res)=>{
    try{
        const {email, password} = req.body
        
        const isData = await userModel.findOne({email:email})
        
        if(isData!==null){
            return res.status(404).json({
                message:"User already exist"
            })
        }
        bcrypt.hash(password, 10, (err, encr)=>{
            if(err){
                res.status(500).json({
                    message:"internal server issue"
                })
            }
            else{
                console.log(encr)
            }
        })
    }
    catch(e){
        console.log(e.message)
    }
   

    
})

module.exports = router