const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to mongoDB server...');

    // db.collection('Todos').find({_id: new ObjectID('59d27f7f12ae5b346afc4b34')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 4));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Users').find({name: 'Jamshid'}).count().then((count) => {
    //     console.log(`Jamshid count(s): ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch names on users', err);
    // });

    db.collection('Users').find({name: 'Jamshid'}).toArray().then((count) => {
        console.log(JSON.stringify(count, undefined, 4));
    }, (err) => {
        console.log('Unable to fetch names on users', err);
    });

    // db.close();
});