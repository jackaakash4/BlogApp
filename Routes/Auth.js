const express = require('express');
const router = express.Router();
const User = require('../Models/UserSchema')

const user = require('../Models/UserSchema');

router.get('/test', async(req, res)=>{
    res.json({
        'message': 'Auth api is working'
    })
})

module.exports = router;