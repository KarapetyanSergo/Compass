document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    document.getElementById("button").onclick = function () {
        navigator.compass.getCurrentHeading(onSuccess, onError);
    }
}

function onSuccess(heading) {
    var head = heading.magneticHeading;
    console.log(head);
    document.getElementById("arrow").style.transform = "rotate("+head+"deg)"

}

function onError(compassError) {
    alert('Compass Error: ' + compassError.code);
}