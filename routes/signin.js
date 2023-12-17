// routes/signin.js

const express = require('express');
const router = express.Router();

// Define a route for the sign-in page
router.get('/', (req, res) => {
    res.render('signin', { title: 'Welcome to Web3 BootStrap App', name: null }); // Assuming you have a signin.ejs file in your views folder
});

// Define additional routes or logic related to sign-in as needed

module.exports = router;
