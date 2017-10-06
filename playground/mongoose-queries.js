const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');
var id = '59d5f03b5a2c4e1e709b9f24';
User.findById(id).then((user) => {
    if (!user) {
        return console.log('user not found!');
    }
    console.log('User by id', user);
}).catch((e) => console.log(e));

// var id = '59d642eb0e22101e9c9160f0';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
//     }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));