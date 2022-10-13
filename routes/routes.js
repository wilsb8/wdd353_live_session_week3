const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('home', {pagename: 'Home'});
});

router.get('/about', (req, res) => {
    res.render('about', {
        pagename: 'About', 
    });
});

router.get('/contact', (req, res) => {
    res.render('contact', {
        pagename: 'Contact',
    });
});

router.get('/services', (req, res) => {
    res.render('services', {
        pagename: 'Services',
    });
});
module.exports = router;