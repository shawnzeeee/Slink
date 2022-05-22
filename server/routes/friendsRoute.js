const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const dbUser = require('../schemas/dbUser')
router.get('/',(req,res)=>{
    const username = req.query.username;
    dbUser.findOne({
        username: username
    }, (err, result)=>{       
        if(err){
            console.log(err);
        }else{            
            if(result.friends == null){
                res.send([]);
            }else{
                res.send(result.friends);
            }
        }
    })
})

module.exports = router;