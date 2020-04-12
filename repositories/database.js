const mongoose = require('mongoose');

/*mongoose.connect('mongodb://localhost/test_db', {
    useNewUrlParser: true//revisar en la documentacion
}).then(db => console.log('DB is connected')).catch(err => console.log(err));*/

const uri = 'mongodb://mongo:27017/image_test'

const db = mongoose.connection;

mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(()=>console.log("Connected to mongodb"))
.catch(
    error => console.log(error)
);

db.once(
    'open',
    _ => { console.log("Database is connected to " + uri) }
)

db.on(
    'error',
    error=>console.log(error)
)