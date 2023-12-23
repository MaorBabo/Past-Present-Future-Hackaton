
const Joi = require('joi');
const createRecipe = async(req, res) => {
    req.body.text = "give me a post that is pro Israel about the next subject: " + req.body.text +
    "the post sould be writen in the language: "+ req.body.language;
    const response = await bardServices.createRecipe(req.body)
    res.send(response); /// replase wite the mongoDB function which find all of the users at the database.
}


function validateBard (body){
    const schema = {
        text:Joi.string().required(),
    };
    return Joi.validate(body,schema);

} 

exports.createRecipe =   createRecipe;
exports.validate = validateBard;