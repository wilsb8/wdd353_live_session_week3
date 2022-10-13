const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    res.render('home', {
        pagename: 'Home',
    });
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

// POST method
router.post('/register', (req) => {
    const data = req.body;
    const errors = {};
    // validate using regex
    // firstName
    if(!(/^([a-zA-Z '-]+)$/).test(String(data.firstName))) {
        errors.firstName = ['Must provide a first name.'];
    }
    // lastName
    if(!(/^([a-zA-Z '-]+)$/).test(String(data.lastName))) {
        errors.lastName = ['Must provide a last name.'];
    }
    // address
    if(!(/\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/).test(String(data.address))) {
        errors.address = ['Must provide an address.'];
    }
    // city
    if(!(/^([a-zA-Z '-]+)$/).test(String(data.city))) {
        errors.city = ['Must provide a city name.'];
    }
    // state
    if(!(/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/).test(String(data.state))) {
        errors.state = ['Must provide a two letter state abbreviation.'];
    }
    // zipcode
    if(!(/^\d{5}$/).test(String(data.zipcode))) {
        errors.zipcode = ['Must provide a 5-digit ZIP code.'];
    }
    // email
    if(!(/[\w-]+@([\w-]+\.)+[\w-]+/).test(String(data.email))) {
        errors.email = ['Must enter a valid email address.'];
    }
    // password
    if(!(/^[a-zA-Z]\w{3,14}$/).test(String(data.password))) {
        errors.password = ['Must enter a password at least 4 characters and no more than 15 characters.']
    }
});

module.exports = router;