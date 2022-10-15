const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended: false}));

// forward declarations *******************************************

let fn, ln, city = /^([a-zA-Z '-]+)$/; // first, last and city
let a = /\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/; // address
let s = /^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/; // 2 char abbrev.
let z = /^\d{5}$/; // zip
let e = /[\w-]+@([\w-]+\.)+[\w-]+/; // email
let p = /^[a-zA-Z]\w{3,14}$/; // password must be at least 4, max 15


// end foward declarations ******************************************

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

// POST method with validation

router.post('/register', (req, res) => {
    console.log(req.body);
    let errors = {};
    // check for first name
    if (!fn.test(req.body.firstName))
    {
            errors.firsNameMsg = "First name required";
    }
    
});






module.exports = router;