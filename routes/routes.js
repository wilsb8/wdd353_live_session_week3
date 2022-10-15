const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended: false}));

// forward declarations *******************************************

var fn = new RegExp(/^([a-zA-Z '-]+)$/); // apparently for test to work, you have to do it this way.
var ln = new RegExp(/^([a-zA-Z '-]+)$/);
var cit = new RegExp(/^([a-zA-Z '-]+)$/); // first, last and city
var a = new RegExp(/\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/); // address
var s = new RegExp(/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/); // 2 char abbrev.
var z = new RegExp(/^\d{5}$/); // zip
var e = new RegExp(/[\w-]+@([\w-]+\.)+[\w-]+/); // email
var p = new RegExp(/^.{8,32}$/); 

console.log(p);
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
    let fname = req.body.firstName,
        lname = req.body.lastName,
        addr = req.body.address,
        cty = req.body.city,
        sta = req.body.state,
        zc = req.body.zipcode,
        em = req.body.email,
        pw = req.body.password;
    let errors = {};
    let status;
    let values = {fname, lname, addr, cty, sta, zc, em, pw};
    // validation - test it against regex
    if (fn.test(fname) && fname.length >= 2) {
        delete errors.fnameMsg;
    } else {
        errors.fnameMsg = "A first name is required. (Minimum 2 characters)";
    }
    if (ln.test(lname) && lname.length >= 3) {
        delete errors.lnameMsg;
    } else {
        errors.lnameMsg = "A last name is required. (Minimum 3 characters)";
    }
    if (a.test(addr)) {
        delete errors.addrMsg;
    } else {
        errors.addrMsg = "You must provide a valid address.";
    }
    if (cit.test(cty) && cty.length >=3) {
        delete errors.ctyMsg;
    }
    else {
        errors.ctyMsg = "You must provide a city (Minimum 3 characters)";
    }
    if (s.test(sta)) {
        delete errors.staMsg;
    } else {
        errors.staMsg = "You must provide a 2-character state abbreviation.";
    }
    if (z.test(zc) && zc.length >= 5) {
        delete errors.zcMsg;
    } else {
        errors.zcMsg = "You must provide a 5-digit ZIP code."
    }
    if (e.test(em)) {
        delete errors.eMsg;
    } else {
        errors.eMsg = "You must provide a valid email.";
    }
    if (p.test(pw) && (pw.length >=8 || pw.length <=32)) {
        delete errors.pwMsg;
    } else {
        errors.pwMsg = "Password must be at least 8 characters but no more than 32."
    }
    // provide feedback alert
    const isEmpty = Object.keys(errors) == 0;
    console.log(errors);
    let alert = "";
    if(isEmpty) {
        status = "Registration Successful";
        alert = "alert alert-success";
        values = {};
    } else if(!isEmpty) {
        status = "Registration Failed!";
        alert = "alert alert-danger";
    }

    // re-render register page
    res.render('register', {pagename:'Register', errors:errors, status:status, alert:alert });
    
});



module.exports = router;