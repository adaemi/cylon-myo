var Myo = require('myo');

var rawData = [0,0,0,0,0,0,0,0];
Myo.on('emg', function(data){
    rawData = data;
})

Myo.on('connected', function(){
    console.log('connected');
    //this.streamEMG(true);
    //
    //setInterval(function(){
    //    console.log(JSON.stringify(rawData, null, 2));
    //}, 25)
})

Myo.connect('com.splitelement.myotest1');

Myo.on('fist', function(){
    console.log('Hello Myo!');
    this.vibrate();
});

//Myo.on('orientation', function(data) {
//    console.log("orientation: " + JSON.stringify(data, null, 2));
//});

Myo.on('status', function(data){
    console.log("status: " + JSON.stringify(data, null, 2));
});


//Whenever we get a pose event, we'll update the image sources with the active version of the image
Myo.on('pose', function(pose){
    console.log("pose: " + JSON.stringify(pose, null, 2));

});
//Opposite of above. We also revert the main img to the unlocked state
Myo.on('pose_off', function(pose){
    console.log("pose off: " + JSON.stringify(pose, null, 2));

});

//Whenever a myo locks we'll switch the main image to a lock image
Myo.on('locked', function(){
    console.log("locked: ");

});

//Whenever a myo unlocks we'll switch the main image to a unlock image
Myo.on('unlocked', function(){
    console.log("unlocked: ");
});

