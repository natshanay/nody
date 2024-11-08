const express = require('express');
const router = express.Router();


router.post('/register', (req, res) => {
 
    res.status(201).send("register user");
});
router.post('/login', (req, res) => {
 
    res.status(201).send("login user");
});

module.exports = router;
