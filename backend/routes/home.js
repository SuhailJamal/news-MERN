const express = require('express')
const router = express.Router()
const axios = require('axios')
require('dotenv').config(path = "../.env")
router.get('/', async(req, res) => {
    try {
        
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=89bd6a46af96402996b55547aa05a4f3`)
        res.json(response.data)
        
    } catch (error) {
        res.send(error)}
})
module.exports = router