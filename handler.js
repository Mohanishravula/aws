'use strict';
const app = require('./server');
const Serverless = require('serverless-http')

module.exports.hello = Serverless(app)

