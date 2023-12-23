const express = require('express');
const bardRouter = express.Router()
const  {validate } = require( '../models/bard');
const bardServices = require( '../services/bard');

// a list of volunteers which need help:
volunteers_askers=[
    {
        type:"agricultural",
        email:"zvika1970@gmail.com ",
        num_of_volunteers:20,
        work_hours:"8-18",
        location:"Kibbutz Bari"
    },
    {
        type:"Lawyer",
        num_of_volunteers:1,
        email:"maor1977@gmail.com ",
        work_hours:"",
        location:"Kibbutz Bari"
    },
    {
        type:"Lawyer",
        num_of_volunteers:1,
        email:"simon1989@gmail.com ",
        work_hours:"10:00-15:00",
        location:"-"
    },
    {
        type:"Lawyer",
        num_of_volunteers:1,
        email:"simon1999@gmail.com ",
        work_hours:"12:00-14:00",
        location:"zoom/phone"
    },
];

const types = ["Agricultural","Lawyer"];


// 1. where are you from? i=1
// 2. what is your age?i=2
// 3.What would you like to volunteer for? i=3

// case: its at the db: so we finish and i=0

// 4. great!!! This is the email of the contacts who are looking for volunteers in the field you mentioned:
// ...

// case: its isnt at the db: so we offer the volunteer field in the db: i=4
// 5.I didn't find volunteering in the field you were looking for, maybe I can suggest you choose one of the following fields: ...

// case: the user agree to something at the list so: i=0
// 6. great!!! This is the email of the contacts who are looking for volunteers in the field you mentioned:

// case: the user not agree to something at the list so: i=0
// 7. Thanks, if you want to look for volunteering in the future feel free to ask me.

let index=0;
bardRouter.post('/',async(req,res)=>{
    let text="";
    const {error} = validate(req.body);
    const userInput = req.body.text;
    let counter = 0;
    let emails=[]; 
    if (error) return res.status(400).send('The data was given is invalid!!!');
    if (index===0)
    {
        text = "Hello! How can I assist you today?";
        index+=1;
    }
    else if (index===1)
    {
        text ="Please enter your age?";
        index+=1;
    }
    else if (index===2)
    {
        text = "What would you like to volunteer for?";
        index+=1;
    }
    else if (index===3)
    {
        for(const v of volunteers_askers )
        {
            if (v.type===userInput)
            {
                emails.push(v.email);
            }

        }
        counter=1
        text = `Great!!! Those are the details of the individuals who are looking for services in this field you mentioned: ${emails} `;
        if (emails.length>0)
        {
            index=0;
        }
        
        if (emails.length===0)
        {
            text = "I didn't find volunteering activity for the field you are looking for. I can suggest you choose one of the following fields: ";
            for (const t of types)
            {
                text += `${t} `;
            }   
            index+=1;
        }
    }
    else if (index===4 && types.includes(userInput) )
    {
        for(const v of volunteers_askers )
        {
            if (v.type===userInput)
            {
                let e = v.email;
                emails.push(e);
            }
        }
        text = `Great!!! Those are the details of the individuals who are looking for services in this field you mentioned: ${emails} `;
        index=0;
    }
    else
    {
        text = "Thanks! if you look for volunteering activity in the future feel free to ask."
        index = 0;
    }
    //const response = await bardServices.createRecipe(req.body);
    res.send(text);
});

module.exports =  bardRouter;