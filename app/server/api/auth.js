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

// route http://localhost:3000/api/auth/signup
auth.route('/signup')
  .get( db.showallusers, (req, res) => {
    res.send(res.rows);
  })
  .post( db.createUser, ( req, res ) => {
    console.log(req.body, 'req.body')
    res.status( 201 ).json( { data: 'success' } );
  });

// auth.get('/:id', db.userProfile,  (req, res) => {
//     res.send(res.rows);
//   })

auth.post('/login', db.loginUser, ( req, res ) => {
  var token = jwt.sign( res.rows, secret );

  res.json( { agent: res.rows, token: token } );
})

module.exports = auth;
