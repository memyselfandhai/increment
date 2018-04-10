var mongoose = require("mongoose");
var bluebird = require("bluebird");

// Set bluebird as the promise
// library for mongoose
mongoose.Promise = bluebird;

var models = {};

// Load models and attach to models here
models.User = require("./user");
models.Exercise = require("./exercise");
models.Routine = require("./routine");
models.Workout = require("./workout");

module.exports = models;
