require("dotenv").config();
let express = require('express');
let app = express(); //instance of express
let sequelize = require('./db');

let user = require('./controllers/usercontroller');
let journal = require('./controllers/journalcontroller');

sequelize.sync();

// sequelize.sync({force:true})
app.use(require('./middleware/headers'));

app.use(express.json());

//**Exposed route **//
app.use('/user', user);

app.use('/journal', journal);

// practice test code
// app.use('/test', function(req,res){
//     res.send('This is a message from the test endpoint on the server!')
// })

// module challenge
// app.use('/kendra', function(req,res){
//     res.send('My name is Kendra and I am blank years old')
// })

app.listen(3000, function(){
    console.log('App is listening on port 3000');
})