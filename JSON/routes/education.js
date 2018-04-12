const express = require('express');
const router = express.Router();
const obj = require('./details');

router.get("/", function (req, res) {
    try{
        res.json(obj.education) 
    }
    catch(error)
    {
        res.status(404).json({ error: "Content not found" });
    }  
});            

module.exports = router;
