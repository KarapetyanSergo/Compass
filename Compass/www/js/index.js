document.addEventListener("deviceready", onDeviceReady, false);

var obj = null;

function onDeviceReady() {
   navigator.compass.getCurrentHeading(onSuccess, onError)
}

function onSuccess(heading) {
    var head =  heading.magneticHeading;
    document.getElementById("arrow").style.transform = "rotate("+head+"deg)";
    console.log(head)
}

function onError(compassError) {
    alert('Compass error: ' + compassError.code);
}

function func() {
    if(obj == null){
        navigator.compass.clearWatch(obj);
        obj+null;
        console.log("ha")
    }
    else{
        obj = navigator.compass.watchHeading(onSuccess, onError, {frequency: 1000})
    }
}