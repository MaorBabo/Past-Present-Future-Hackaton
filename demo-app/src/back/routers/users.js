const express = require('express');
const Joi = require('joi');
const { User, validate } = require('../models/users');
const mongoose = require('mongoose');
const router = express.Router();

/// Users API:

// post new user.
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //let user = await User.findOne({ email: req.body.email });
    //if (user) return res.status(400).send('user already registered');


    user = new User({email:req.body.email,password:req.body.password});
    try {
        await user.save();
        console.log("here");
        res.status(201).json({ success: true });
    }
    catch (e) {
        for (field in e.errors)
            console.log(e.errors[field].message);
    }
});


module.exports = router;


