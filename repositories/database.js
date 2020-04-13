const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  ).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

/*mongoose.connect('mongodb://localhost/test_db', {
    useNewUrlParser: true//revisar en la documentacion
}).then(db => console.log('DB is connected')).catch(err => console.log(err));*/
