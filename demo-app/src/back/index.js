// const Joi = require('joi');
// const mongoose = require('mongoose');
// const express = require('express');
// const users = require('./routers/users');
// const bard = require('./routers/bard');
// const cors = require('cors');
// const app = express();
// app.use(cors());
// //app.use(cors({ origin: 'http://localhost:3001' }));
// app.use(express.json());
// app.use('/api/bard', bard);
// app.use('/api/users', users);



// //app.use(cors({ origin: 'http://localhost:3001' }));



// // connect to MongoDB.
// async function connect() {
//     try {
//         await mongoose.connect("mongodb+srv://zvikababo:zvika2002@cluster0.h5hevja.mongodb.net/HakatonFuture?retryWrites=true&w=majority");
//         console.log(`Connected to MongoDB...`);
//     }
//     catch (e) {
//         console.log(`DB connection Error: ${e}`);
//     }
// }

// connect();

// // setting a listener.
// const port = 5000//(process.env.port || 5000);
// const server = app.listen(port, () => { console.log(`lisening on port ${port}...`) });
// module.exports = server;
const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const users = require('./routers/users');
const bard = require('./routers/bard');
const cors = require('cors');
const app = express();

// Connect to MongoDB.
async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://zvikababo:zvika2002@cluster0.h5hevja.mongodb.net/HakatonFuture?retryWrites=true&w=majority'
    );
    console.log('Connected to MongoDB...');
  } catch (e) {
    console.log(`DB connection Error: ${e}`);
  }
}

connect();

// Enable CORS for all routes
//app.use(cors());
app.use(cors({ origin: 'http://localhost:3001' }));
// Parse JSON requests
app.use(express.json());

// Routes
app.use('/api/bard', bard);
app.use('/api/users', users);

// Setting a listener.
const port = 5000; // (process.env.port || 5000);
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports = server;
