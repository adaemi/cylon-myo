"use strict";

var Cylon = require("cylon");
var Events = require("./events");
var Commands = require("./commands");

var Driver = module.exports = function Driver(opts) {
  Driver.__super__.constructor.apply(this, arguments);
  opts = opts || {};

  this.events = Events;
  this.setupCommands(Commands);
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function(callback) {

  this.events.forEach(function(e) {
    this.defineDriverEvent(e);
  }.bind(this));

  callback();
};

Driver.prototype.halt = function(callback) {
  callback();
};

Driver.prototype.hello = function() {
  Cylon.Logger.info("Hello, Myo World!");
};

