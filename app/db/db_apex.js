'use strict'

// require('dotenv').config();
const bcrypt = require('bcrypt');
const salt   = bcrypt.genSaltSync(10);

const pgp = require('pg-promise')({
    // Initialization Options
});

const cn = 'postgres://eminekoc:1297@localhost/apex'

// const cn = {
//   host: 'localhost',
//   port: 5432,
//   database: 'apex',
//   user: 'jimmylin',
//   password: 'desertprince69'
// };

const db = pgp(cn);


// Employer User Auth
function showAllEmployerUsers(req, res, next) {
  db.any('select * from EmployerUsers;')
  .then(function(data) {
    res.rows= data;
    console.log('this should show all Employer Users;', data)
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};

function createEmployerUser(req, res, next) {
  console.log('req.body from post request', req.body)

  createSecure(req.body.email, req.body.password, saveUser);

  function saveUser(email, hash) {
    db.none("INSERT INTO EmployerUsers (email, password, type) VALUES ($1, $2, $3);", [email, hash, req.body.type])
    .then(function (data) {
      // success;
      console.log('New EmployerUsers added')
      next();
    })
    .catch(function () {
      // error;
      console.error('error signing up');
    });
  }
}

function loginEmployerUser(req, res, next) {
  var email = req.body.email
  var password = req.body.password

  db.one("SELECT * FROM EmployerUsers WHERE email LIKE $1;", [email])
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

function employerProfile(req,res,next){
  db.one("select * from Employers where user_id = $1",
  [ req.params.uid ])
  .then(function(data) {
    res.rows= data;
    next();
  })
  .catch(function(error){
    console.error(error);
  })
}


// Applicant User Auth
function showallApplicantUsers(req, res, next) {
  db.any('select * from ApplicantUsers;')
  .then(function(data) {
    res.rows= data;
    console.log('this should show all Applicant Users;', data)
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};

function createApplicantUser(req, res, next) {
  console.log('req.body from post request', req.body)

  createSecure(req.body.email, req.body.password, saveUser);

  function saveUser(email, hash) {
    db.none("INSERT INTO ApplicantUsers (email, password, type) VALUES ($1, $2, $3);", [email, hash, req.body.type])
    .then(function (data) {
      // success;
      console.log('New Applicant User added')
      next();
    })
    .catch(function () {
      // error;
      console.error('error signing up');
    });
  }
}

function loginApplicantUser(req, res, next) {
  var email = req.body.email
  var password = req.body.password

  db.one("SELECT * FROM ApplicantUsers WHERE email LIKE $1;", [email])
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

function applicantProfile(req,res,next) {

  db.one("select * from ApplicantUsers where id = $1)",
  [ req.params.id ])
  .then(function(data) {
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
  db.any('select * from Jobs where employer_id = $1;', [req.params.employer_id] )
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


function applicantProfile(req,res,next){
  db.one("select * from Applicants where user_id = $1",
  [ req.params.uid ])
  .then(function(data) {
    res.rows= data;
    next();
  })
  .catch(function(error){
    console.error(error);
  })
}

// Applicant queries

function showAllApplicants(req,res,next){
  db.any('select * from Applicants;')
  .then(function(data) {
    res.rows= data;
    console.log('this should show all Applicants;', data)
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};

function showOneApplicant(req,res,next){
  db.any('select * from Applicants where id = $1;', [req.params.applicant_id] )
  .then(function(data) {
    res.rows= data;
    console.log('this should show one Applicant', data)
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};

function postOneApplicant(req,res,next){

  db.any(`INSERT INTO Applicants  (
    user_id,
    first_name,
    last_name,
    desired_industry,
    education_level,
    school,
    experience_level,
    resume_pdf,
    profile_image,
    desired_location,
    certifications,
    languages_spoken
  ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) returning id;`,
    [
      req.body.user_id,
      req.body.first_name,
      req.body.last_name,
      req.body.desired_industry,
      req.body.education_level,
      req.body.school,
      req.body.experience_level,
      req.body.resume_pdf,
      req.body.profile_image,
      req.body.desired_location,
      req.body.certifications,
      req.body.languages_spoken
    ])
  .then(function(data) {
    res.rows = data[0]
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};


// Applicant queries

function showAllEmployers(req,res,next){
  db.any('select * from Employers;')
  .then(function(data) {
    res.rows= data;
    console.log('Show all Employers;', data)
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};

function showOneEmployer(req,res,next){
  db.any('select * from Employers where id = $1;', [req.params.employer_id] )
  .then(function(data) {
    res.rows= data;
    console.log('Show one Employers', data)
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};

function postOneEmployer(req,res,next){

  db.any(`INSERT INTO Employers  (
    company_name,
    company_address,
    company_city,
    company_state,
    company_zip,
    company_description,
    company_website,
    company_phone_number,
    company_email,
    company_size,
    company_industry,
    company_branch
  ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) returning id;`,
    [
      req.body.company_name,
      req.body.company_address,
      req.body.company_city,
      req.body.company_state,
      req.body.company_zip,
      req.body.company_description,
      req.body.company_website,
      req.body.company_phone_number,
      req.body.company_email,
      req.body.company_size,
      req.body.company_industry,
      req.body.company_branch
    ])
  .then(function(data) {
    res.rows = data[0]
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};


// get one Job based on job_id
function getOneJob(req,res,next){
  db.any('select * from Jobs where id = $1;', [req.params.job_id] )
  .then(function(data) {
    res.rows= data;
    console.log('this should get one Job', data)
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};

function uploadCompanyLogo(req,res,next){
  req.body.filename = req.files[0].filename;
  console.log(req.body)

  req.body.filename = req.files[0].filename;
  db.none(`update Employers set
    company_logo = $/filename/
    where id = $/id/`,
      req.body)
    .then(() => {
      console.log('inserted event picture');
    })
    .catch((err) => {
      console.error('error inserting event pic: ', err);
    })

};

function uploadProfileLogo(req,res,next){
  req.body.filename = req.files[0].filename;
  console.log(req.body)

  req.body.filename = req.files[0].filename;
  db.none(`update Employers set
    company_logo = $/filename/
    where id = $/id/`,
      req.body)
    .then(() => {
      console.log('inserted event picture');
    })
    .catch((err) => {
      console.error('error inserting event pic: ', err);
    })

};

// Employer user_auth exports
module.exports.showAllEmployerUsers = showAllEmployerUsers;
module.exports.createEmployerUser = createEmployerUser;
module.exports.loginEmployerUser = loginEmployerUser;
module.exports.employerProfile = employerProfile;

// Applicant user_auth exports
module.exports.showallApplicantUsers = showallApplicantUsers;
module.exports.createApplicantUser = createApplicantUser;
module.exports.loginApplicantUser = loginApplicantUser;
module.exports.applicantProfile = applicantProfile;

module.exports.editUser = editUser;
module.exports.deleteUser = deleteUser;

// Applicant Profile Form exports
module.exports.showAllApplicants = showAllApplicants;
module.exports.postOneApplicant = postOneApplicant;
module.exports.showOneApplicant = showOneApplicant;
module.exports.uploadProfileLogo = uploadProfileLogo;

// Employer Profile Form Exports
module.exports.showAllEmployers = showAllEmployers;
module.exports.postOneEmployer = postOneEmployer;
module.exports.showOneEmployer = showOneEmployer;
module.exports.uploadCompanyLogo = uploadCompanyLogo;


// Job Exports
module.exports.showAllJobs = showAllJobs;
module.exports.postAJob = postAJob;
module.exports.showOneJob = showOneJob;
module.exports.getOneJob = getOneJob;
