const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb://172.31.52.93:30584/imageDB',//for despliegue//'mongodb://localhost/test_db',
    { useNewUrlParser: true }
  ).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));
