'use strict';

const express = require('express');
const expressJWT  = require('express-jwt');
const auth = express.Router();
// const bodyParser = require('body-parser');
// this is the route localhost:3000/api/auth
const db = require('../../db/db_apex');

const jwt         = require('jsonwebtoken');
const bodyParser  = require('body-parser');
const secret      = 'sosecret';

// Applicant User Auth
// Path http://localhost:3000/api/auth/applicant/...
auth.route('/applicant/signup')
  .get( db.showallApplicantUsers, (req, res) => {
    res.send(res.rows);
  })
  .post( db.createApplicantUser, ( req, res ) => {
    console.log('request us receieved', req )
    res.status( 201 ).json( { data: 'success' } );
  });

auth.post('/applicant/login', db.loginApplicantUser, ( req, res ) => {
  var token = jwt.sign( res.rows, secret );

  res.json( { agent: res.rows, token: token } );
})

auth.route('/applicant/:uid')
.get( db.applicantProfile, (req, res) => {
  res.send(res.rows);
})


// Employer User Auth
// Path http://localhost:3000/api/auth/employer/...
auth.route('/employer/signup')
  .get( db.showAllEmployerUsers, (req, res) => {
    res.send(res.rows);
  })
  .post( db.createEmployerUser, ( req, res ) => {
    console.log('request us receieved', req )
    res.status( 201 ).json( { data: 'success' } );
  });

auth.post('/employer/login', db.loginEmployerUser, ( req, res ) => {
  var token = jwt.sign( res.rows, secret );

  res.json( { agent: res.rows, token: token } );
})

auth.route('/employer/:uid')
.get( db.employerProfile, (req, res) => {
  res.send(res.rows);
})



module.exports = auth;
