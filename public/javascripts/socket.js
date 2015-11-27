var socket = io();

socket.on('peers', function (peers) {
  console.log(peers);
});
