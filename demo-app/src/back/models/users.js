const Joi = require('joi');
const mongoose = require('mongoose');


const usersSchema = mongoose.Schema({
    email: { type: String, required: true, minlength: 5, maxlength: 255 },
    password: { type: String, required: true, minlength: 3, maxlength: 1024 },
});

const User = mongoose.model('User', usersSchema);



function isValidUser(user) {
    const schema = {
        email: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(3).max(255).required()
    }
    return Joi.validate(user, schema);

}






exports.User = User;
exports.validate = isValidUser;
