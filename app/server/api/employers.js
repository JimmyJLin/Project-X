'use strict';

const express = require('express');
const employers = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'app/images/company_logo/'})
// const bodyParser = require('body-parser');

const db = require('../../db/db_apex');

employers.route('/upload')
  .post(upload.any(), db.uploadCompanyLogo, (req, res) => {
    console.log("uploading Company Logo:", req.files)
    res.send(req.files);
  })

employers.route('/')
  .get(db.showAllEmployers, (req, res) => {
    console.log("from employer.js showAllemployers")
    res.send(res.rows);
  })

employers.route('/new')
  .post(db.postOneEmployer, (req, res) => {
    res.send(res.rows)
  });

employers.route('/:employer_id')
  .get( db.showOneEmployer, (req, res) => {
    res.send(res.rows);
  });



module.exports = employers;
