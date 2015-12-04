"use strict";

var Adaptor = require("./lib/adaptor"),
    Driver = require("./lib/driver");

module.exports = {
  // Adaptors your module provides, e.g. ["spark"]
  adaptors: ["myo"],

  // Drivers your module provides, e.g. ["led", "button"]
  drivers: ["myo"],

  // Modules intended to be used with yours, e.g. ["cylon-gpio"]
  dependencies: [],

  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    return new Driver(opts);
  }
};
