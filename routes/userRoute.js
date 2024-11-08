const express = require('express');
const router = express.Router();
// user controller

const {register,login,check} = require("../controllere/userController");

router.post('/register', register);
router.post('/login', login);
router.get('/check', check);

module.exports = router;
