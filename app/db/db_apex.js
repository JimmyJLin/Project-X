'use strict'

// require('dotenv').config();
const pgp = require('pg-promise')({
    // Initialization Options
});

const cn = 'postgres://eminekoc:1297@localhost/apex'
;

const db = pgp(cn);


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
  db.one(`INSERT INTO Jobs  (employer_id,title,description,location,type,industry,salary,experience_level,education_level,starting_date, status)
  VALUES ($1, $2, $3, $4, $5,$6,$7,$8,$9,$10,$11) RETURNING *;`,
    [req.body.employer_id, req.body.title, req.body.description, req.body.location, req.body.type,req.body.industry,req.body.salary,req.body.experience_level,req.body.education_level,req.body.starting_date,req.body.status])
  .then(function(data) {
    console.log(data);
    res.rows = data;
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};

module.exports.showAllJobs = showAllJobs;
module.exports.postAJob = postAJob;
module.exports.showOneJob = showOneJob;
