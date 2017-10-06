const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// remove everything from db
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// remove one from db
// Todo.findOneAndRemove({_id: '59d74b70e1d4b6ed84df5a41'}).then((todo) => {
//     console.log(todo);
// });

// remove by id
// Todo.findByIdAndRemove('59d749e6e1d4b6ed84df59ce').then((todo) => {
//     console.log(todo);
// });