'use strict';

const express = require('express');
const jobs = express.Router();
// const bodyParser = require('body-parser');

const db = require('../../db/db_apex');

jobs.route('/new')
.get(db.showAllJobs, (req, res) => {
  res.send(res.rows);
})
.post(db.postAJob, (req, res) => {
  console.log('Job posting', req )
  res.status( 201 ).json( { data: 'success' } );
});

jobs.route('/:employer_id')
.get( db.showOneJob, (req, res) => {
  res.send(res.rows);
});

jobs.route('/job_details/:job_id')
.get( db.getOneJob, (req, res) => {
  res.send(res.rows)
})



module.exports = jobs;
