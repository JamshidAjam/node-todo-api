const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to mongoDB server...');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59d3b8987e503158a31db90b')
    //     }, {
    //         $set: {
    //         text: 'Read book'
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((res) => {
    //         console.log(res);
    //     });


    db.collection('Users').findOneAndUpdate({
        name: 'Jamshid'
        }, {
            $set: {
                name: 'Jimmy'
            },
            $inc: {
                age: +1
            }
        }, {
            returnOriginal: false
        }).then((res) => {
            console.log(res);
        });

    // db.close();
});