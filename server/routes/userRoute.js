const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const dbUser = require('../schemas/dbUser')
const bcrypt = require('bcrypt');

const saltRounds = 10
const testPassword = "testpassword"
router.get('/create',(req,res)=>{
  //  bcrypt.hash(testPassword, saltRounds, function(err, hash) {
   //     res.send(hash);
    //});
    bcrypt.compare(testPassword, '$2b$10$GSnEIyqohPJgCtQ.kxVi4.UvELdBCfsdfsdfL4dE/z7VX7wHOGWs.Hz6j3q').then(function(result) {
        res.send(result)
    });
})

module.exports = router;