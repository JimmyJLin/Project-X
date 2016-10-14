'use strict';

const express = require('express');
const applicants = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'app/images/profile_images/'})
// const bodyParser = require('body-parser');

const db = require('../../db/db_apex');

applicants.route('/upload')
  .post(upload.any(), db.uploadProfileLogo, (req, res) => {
    console.log("uploading Profile Logo:", req.files)
    res.send(req.files);
  })

applicants.route('/')
  .get(db.showAllApplicants, (req, res) => {
    res.send(res.rows);
  })

applicants.route('/new')
  .post(db.postOneApplicant, (req, res) => {
    res.send(res.rows)
  });

applicants.route('/:applicant_id')
  .get( db.showOneApplicant, (req, res) => {
    res.send(res.rows);
  });



module.exports = applicants;
