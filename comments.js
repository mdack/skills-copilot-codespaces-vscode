// Create web server

var express = require('express');
var router = express.Router();

// Require controller modules
var comment_controller = require('../controllers/commentController');

/// COMMENTS ROUTES ///

// GET request for creating