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

jobs.route('/active/:employer_id')
.get( db.showActiveJobs, (req, res) => {
  res.send(res.rows);
});

jobs.route('/archived/:employer_id')
.get( db.showArchivedJobs, (req, res) => {
  res.send(res.rows);
});


jobs.route('/job_details/:job_id')
.get( db.getOneJob, (req, res) => {
  res.send(res.rows)
})
.post( db.updateJobStatus, (req, res) => {
  console.log(req.params.job_id)
  console.log(req.params.id)

  res.send(res.rows)
})




module.exports = jobs;
