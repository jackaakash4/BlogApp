const User = require('../Models/UserSchema')

//express code
const express = require('express');

//mini-app like app = express
const router = express.Router();


router.get('/test', async(req, res)=>{
    res.json({
        'message': 'Auth api is working'
    })
})

module.exports = router;