const express = require('express');
const multer = require('multer');
const path = require('path');
const { v4 : uuidv4 } = require('uuid');
const bodyParser = require("body-parser");
var https = require('https');
var http = require('http');

var fs = require('fs');

// Initialitazion
const app = express();
require('./repositories/database');

// Settings
app.set('port', 8443);
app.set('view engine', 'ejs');
const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    passphrase: "0000"
  };


// Middleware
app.use(bodyParser.json()); // <--- Here
/*
const storage = multer.diskStorage({
    destination: 'public/uploads',
    filename: (req, file ,cb)=>{
        cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
    }
});

app.use(multer({
    storage,
    limits: {fileSize: 2000000},
    fileFilter: (req, file, cb) =>{
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimetype = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));
        if(mimetype && extname){
            return cb(null, true);
        }
        cb('Error: Archivo no soportado');
    }
}).single('image'));*/

// Routes
app.use(require('./resources/imageResoure'));

// static files acceso desde navegador
//app.use(express.static('public'));//testeo
// http.createServer(app).listen(app.get('port'), function() {
//    console.log('Http App started');
// });

//https.createServer(options, app).listen(443, function() {
//    console.log('Https App started');
//});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(options, app);

httpServer.listen(8080);
httpsServer.listen(8443);


// Start
//  app.listen(app.get('port'), () =>{
//      console.log(`Server on port ${app.get('port')}`);
//  });
