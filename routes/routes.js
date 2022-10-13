const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const urlencodedParser = bodyParser.urlencoded({ extended: false});

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

router.get('/register', (req, res) => {
    res.render('register', {
        pagename: 'Register',
    });
});

router.post('/register',  urlencodedParser, [
    check('firstName', 'First name must be at least 3 characters long')
        .exists()
        .isLength({min: 3})
        .matches(/(.*[A-Za-z])/),

    check('lastName', 'Last name must be at least 3 characters long')
        .exists()
        .isLength({min: 3})
        .matches(/(.*[A-Za-z])/),

    check('address', 'Adress must start with a numeric')
        .exists()
        .isLength({max: 25})
        .matches(/(.*[0-9A-Za-z])/),

    check('city', 'Adress must start with a numeric')
        .exists()
        .isLength({max: 15})
        .matches(/(.*[A-Za-z])/),

    check('state', 'Must be non-numeric')
        .exists()
        .isLength({max: 15})
        .matches(/(.*[A-Za-z])/),

    check('zipcode', 'ZIP must be numeric')
        .exists()
        .isLength({max: 5})
        .matches(/(.*[0-9])/),

    check('email', 'Email invalid')
        .exists()
        .matches(/(^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$)/),

    check('password', 'Password must be at least 8 characters in length and no more than 15')
        .exists()
        .isLength({min: 8, max: 15})
        .matches(/(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$)/)
        
], (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            const alert = errors.array();
            res.render('register' , {
                alert
            });
        }
        
});

module.exports = router;