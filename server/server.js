var express = require('express');  // 
var app = express();
var port = process.env.PORT || 8000;
var db = require('./db.js')
var morgan = require('morgan')
var https = require('https');

var bodyParser = require('body-parser')  // puts a body key/value on the req object that we can use

// runs everytime a request is received
app.use(morgan('combined'))
app.use(express.static(__dirname + '/../client'));  //load all files that are in /../client
//app.use(bodyParser.urlencoded({ extended: false }))   //for html forms

app.use(bodyParser.json())  // parse application/json

app.use(function(req,res,next){  // use our own custom middleware to do something to the request.  Not actually using it
  //console.log("middleware! here is the data ", req.body); 
  // req.specialThing = "1";
  next();
});

// GET requests endpoint (gets and returns the tags)
app.get('/data', function(req,res,next){
  db.getTags().then(function(data){  
    res.status(200).send(data);
  });
  // next();
})

// POST request endpoint  (saves tags to the DB)
.post('/data',function(req,res,next){    
   
  console.log('Post request recieved /data'); 
  db.saveTags(req.body);    // calls saveTags from db.js
  res.status(201).send('storing: ' + JSON.stringify(req.body));
})

// POST request endpoint (makes a get request to instagram to get the pic data)
.post('/instagram', function(req,res,next){    
   var url = 'https://api.instagram.com/v1/tags/'+req.body.tagName+'/media/recent?access_token=2966165493.1677ed0.915b7ca3e4da4446abed279bd99bb9ab';
   
   var dataResult = ''; //Empty string

   // Instgram api request
   https.get(url, function(response) {

     // JSON stringified object will returned from IG in bufferend chunks
     response.on('data', function(chunk) {
      dataResult += chunk; //concat each chunk to the existing string
     });

     response.on('end', function () {   //all the data has arrived
       var info = JSON.parse(dataResult);

       res.status(200).send(info);  // send the data back to the front end
     })      
   })
})


app.listen(port);
