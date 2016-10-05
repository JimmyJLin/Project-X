'use strict'

// require('dotenv').config();
const bcrypt = require('bcrypt');
const salt   = bcrypt.genSaltSync(10);

const pgp = require('pg-promise')({
    // Initialization Options
});

// if(process.env.NODE_ENV === 'production') {
//   const cn = process.env.DATABASE_URL;
// } else {
  const cn = 'postgres://eminekoc:1297@localhost/apex'
// }

// const cn = {
//   host: 'localhost',
//   port: 5432,
//   database: 'apex',
//   user: 'jimmylin',
//   password: 'desertprince69'
// };

const db = pgp(cn);

function showallusers(req, res, next) {
  db.any('select * from Users;')
  .then(function(data) {
    res.rows= data;
    console.log('this should show all Users;', data)
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};

// User Auth Queries -  CREATE AN ACCOUNT
function createSecure(email, password,callback) {
  console.log('create secure fired')
  //hashing the password given by the user at signup
  bcrypt.genSalt(function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      console.log(hash)
      //this callback saves the user to our databoard
      //with the hashed password
      callback(email,hash);
    })
  })
}

function createUser(req, res, next) {
  console.log('req.body from post request', req.body)

  createSecure(req.body.email, req.body.password, saveUser);

  function saveUser(email, hash) {
    db.none("INSERT INTO Users (email, password, type) VALUES ($1, $2, $3);", [email, hash, req.body.type])
    .then(function (data) {
      // success;
      console.log('New User added')
      next();
    })
    .catch(function () {
      // error;
      console.error('error signing up');
    });
  }
}
// User Auth Queries -  LOGIN AN ACCOUNT

function loginUser(req, res, next) {
  var email = req.body.email
  var password = req.body.password

  db.one("SELECT * FROM Users WHERE email LIKE $1;", [email])
    .then((data) => {
      if (bcrypt.compareSync(password, data.password)) {
        res.rows = data
        next()
      } else {
        res.status(401).json({data:"Fool this no workie"})
        next()
      }
    })
    .catch(() => {
      console.error('error finding users')
    })
}

function userProfile(req,res,next) {

  db.one("select * from Users where id = $1)",
  [ req.params.id ])
  .then(function(data) {
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};


// User Auth Queries -  UPDATE A USER ACCOUNT

function editUser(req,res,next) {

  db.one("UPDATE Users SET name = $1, email = $2, password = $3, last_name = $4, type = $5 where id = $5)",
  [ req.body.name, req.body.email, req.body.password, req.body.last_name,req.body.type, req.params.uID])
  .then(function(data) {
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};

// User Auth Queries -  UPDATE A USER ACCOUNT

function deleteUser(req,res,next) {

  db.none("delete from Users where id=$1)",
  [req.params.uID])
  .then(function() {
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};





// JOB queries

function showAllJobs(req,res,next){
  db.any('select * from Jobs;')
  .then(function(data) {
    res.rows= data;
    console.log('this should show all Jobs;', data)
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};

function showOneJob(req,res,next){
  db.any('select * from Jobs where id LIKE $1;', [req.params.job_id] )
  .then(function(data) {
    res.rows= data;
    console.log('this should show one Job', data)
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};

function postAJob(req,res,next){

  db.none(`INSERT INTO Jobs  (employer_id,title,description,location,type,industry,salary,experience_level,education_level,starting_date, status) VALUES ($1, $2, $3, $4, $5,$6,$7,$8,$9,$10,$11);`,
    [req.body.employer_id, req.body.title, req.body.description, req.body.location, req.body.type,req.body.industry,req.body.salary,req.body.experience_level,req.body.education_level,req.body.starting_date,req.body.status])
  .then(function(data) {
    console.log('success',data);
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.editUser = editUser;
module.exports.deleteUser = deleteUser;
module.exports.showallusers = showallusers;


module.exports.showAllJobs = showAllJobs;
module.exports.postAJob = postAJob;
module.exports.showOneJob = showOneJob;
