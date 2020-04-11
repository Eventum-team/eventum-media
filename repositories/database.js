const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test_db', {
    useNewUrlParser: true//revisar en la documentacion
}).then(db => console.log('DB is connected')).catch(err => console.log(err));