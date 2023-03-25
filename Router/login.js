const express = require("express")
const router = express.Router()
const userModel = require("../models/users")

router.use(express.json())
router.use(express.urlencoded())


router.post("/login", async(req, res)=>{
    const {email, password} = req.body
    const isData = await userModel.find({email:email})
    if(isData){
        return res.status(200).json({
            message:"User already exist"
        })
    }
    
    
})
module.exports =router