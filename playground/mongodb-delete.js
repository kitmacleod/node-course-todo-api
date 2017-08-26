// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deletMany
  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
  // console.log(result);
// });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
//   console.log(result);
// });


// db.collection('Users').deleteOne({name: 'Kit'}).then((result) => {
//   console.log(result);
// });



// db.collection('Users').deleteOne({
//    _id: new ObjectID('59a0f0b5b02e912540c71909')}).then((result) => {
//      console.log(result);
//    });



// db.close();
});
