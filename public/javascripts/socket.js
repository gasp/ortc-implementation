var socket = io();

socket.on('peers', function (peers) {
  var $peers = document.querySelector("#peers");
  while ($peers.firstChild) {
    $peers.removeChild($peers.firstChild);
  }
  for (var i = 0; i < peers.length; i++) {
    var peer = document.createElement('li');
    var ua = 'Unknown';
    if (/Chrome/i.test(peers[i].ua)) ua = 'Chrome';
    if (/Firefox/i.test(peers[i].ua)) ua = 'Firefox';
    if (/Edge/i.test(peers[i].ua)) ua = 'Edge';
    peer.innerHTML = ua + ' ' + peers[i].address;
    $peers.appendChild(peer);
  }
  console.log('peers', peers);
});
