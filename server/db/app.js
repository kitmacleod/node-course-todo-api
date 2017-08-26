var db = require('./db.js');

module.exports.handleSignUp = (email, password) => {
//check if user exists
db.saveUser({email, password});
//send the welcome email



};
