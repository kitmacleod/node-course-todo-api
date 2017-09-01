const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}) similair to .find, does not return the object
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// todo.findOneAndRemove, returns back the object
//Todo.findOneAndRemove
Todo.findOneAndRemove({_id: '59a91daa90b69542cb1c44c2'}).then((todo) => {
  
});

//Todo.findByIdAndRemove
Todo.findByIdAndRemove('59a91daa90b69542cb1c44c2').then((todo) => {
  console.log(todo);
});
