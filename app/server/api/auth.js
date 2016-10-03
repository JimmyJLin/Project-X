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

auth.route('/signup')
  .get( (req, res) => {
    res.json( { data: 'success' } )
  })
  .post(db.createUser, ( req, res ) => {
    res.status(201).json( { data: 'success' } );
  });

// auth.get('/:id', db.userProfile,  (req, res) => {
//     res.send(res.rows);
//   })

auth.post('/login', db.loginUser, ( req, res ) => {
  var token = jwt.sign( res.rows, secret );

  res.json( { agent: res.rows, token: token } );
})

module.exports = auth;
