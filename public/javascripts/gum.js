var gum = function () {
  navigator.mediaDevices.getUserMedia ({
      "audio": true,
      "video": {
          width: 320,
          height: 240,
          facingMode: "user"
      }
  }).then(function (stream) {
    console.log(stream);
    window.stream = stream;
    var video = document.getElementById('local');
    video.srcObject = stream;
  }).catch(function (error) {
    console.log(error);
  });
};
