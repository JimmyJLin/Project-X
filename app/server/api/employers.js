'use strict';

const express = require('express');
const employers = express.Router();
// const bodyParser = require('body-parser');

const db = require('../../db/db_apex');

employers.route('/')
  .get(db.showAllEmployers, (req, res) => {
    console.log("from employer.js showAllemployers")
    res.send(res.rows);
  })

employers.route('/new')
  .post(db.postOneEmployer, (req, res) => {
    res.status( 201 ).json( { data: 'success' } );
  });

employers.route('/:employer_id')
  .get( db.showOneEmployer, (req, res) => {
    res.send(res.rows);
  });



module.exports = employers;
