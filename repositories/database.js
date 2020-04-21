const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb://mongo:27017/imageDB',//for despliegue//'mongodb://localhost/test_db',
    { useNewUrlParser: true }
  ).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));