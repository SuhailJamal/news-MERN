const express = require('express')
const router = express.Router()
const axios = require('axios')
router.get('/',async (req,res)=>{
    try{
        const response = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=${process.env.API_KEY}`)
        res.json(response.data)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})
module.exports = router