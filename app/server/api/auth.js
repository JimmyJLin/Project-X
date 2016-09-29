'use strict';

const express = require('express');
const expressJWT  = require('express-jwt');
const auth = express.Router();
// const bodyParser = require('body-parser');

const db = require('../../db/db_apex');

const jwt         = require('jsonwebtoken');
const bodyParser  = require('body-parser');
const secret      = 'sosecret';

auth.route('/')
  .get( (req, res) => {
    res.json( { data: 'success' } )
  })
  .post(db.createUser, ( req, res ) => {
    res.status(201).json( { data: 'success' } );
  });

auth.post('/login', db.loginUser, ( req, res ) => {
  var token = jwt.sign( res.rows, secret );

  res.json( { agent: res.rows, token: token } );
})
