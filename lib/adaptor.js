"use strict";

var Cylon = require("cylon");
var Myo = require("myo");

var Commands = require("./commands");

var Events = require("./events");

var Adaptor = module.exports = function Adaptor(opts) {
  Adaptor.__super__.constructor.apply(this, arguments);
  opts = opts || {};

  this.appName = opts.appName || "cylon-driver";

  this.connector = this.myo = null;

  this.events = Events;
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.connect = function(callback) {
  this.connector = this.myo = Myo;

  this.myo.connect(this.appName);

  this.proxyMethods(Commands, this.myo, this);

  this.events.forEach(function(name) {
    this.defineAdaptorEvent(name);
  }.bind(this));

  callback();
};

Adaptor.prototype.disconnect = function(callback) {
  this.myo.disconnect();
  callback();
};
