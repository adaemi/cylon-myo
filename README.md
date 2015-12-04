# Cylon.js For Myo

This module provides an adaptor and drivers for Thalmic Labs's [Myo Gesture Control Armband](http://myo.com). It uses the myo module (https://github.com/thalmiclabs/myo.js) created by thalmiclabs (https://github.com/thalmiclabs)

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and physical computing using Node.js

## How to Install

Installing cylon.js with myo support is pretty easy.

    npm install cylon cylon-myo

## How to Use

```javascript
"use strict";

var Cylon = require("cylon");

Cylon.robot({
    connections: {
        myo: { adaptor: "myo", app_name: "com.splitelement.myappid" }
    },

    devices: {
        myo_device: { driver: "myo" }
    },

    work: function(my) {
        my.myo_device.on("navdata", function(data) {
            console.log(data);
        });
        my.myo_device.on('connected', function(){
            console.log('connected');
        });
        my.myo_device.on('fist', function(){
            console.log('fist');
        });
        my.myo_device.on('orientation', function(data) {
            console.log("orientation: " + JSON.stringify(data, null, 2));
        });
        my.myo_device.on('status', function(data){
            console.log("status: " + JSON.stringify(data, null, 2));
        });
        my.myo_device.on('pose', function(pose){
            console.log("pose: " + JSON.stringify(pose, null, 2));
        });
        my.myo_device.on('pose_off', function(pose){
            console.log("pose off: " + JSON.stringify(pose, null, 2));
        });
        my.myo_device.on('locked', function(){
            console.log("locked: ");

        });
        my.myo_device.on('unlocked', function(){
            console.log("unlocked: ");
        });
    }
}).start();
```

## How to Connect

Connect the Myo as per standard procedure.

## License
MIT