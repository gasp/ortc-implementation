// this code is edge only bacause it uses ORTC spec

if (typeof RTCIceGatherer === 'undefined') {
  log('it looks like your browser does not support ORTC');
}

var iceOptions = {};
iceOptions.gatherPolicy = 'all';
iceOptions.iceservers = [
  {url: 'stun:stun3.l.google.com:19305'},
  {url: 'stun:stun.jappix.com:3478'},
  {url: 'stun:stun.ekiga.net'},
  {url: 'stun:52.28.254.183'}, // videodesk
  {url: 'turn:52.28.254.183'} // videodesk
];
var iceOptions = { "gatherPolicy": "all", "iceServers": [{ "urls": "turn:turn-testdrive.cloudapp.net:3478?transport=udp", "username": "redmond", "credential": "redmond123" }] };
var iceGathr = new RTCIceGatherer(iceOptions);

iceTr = new RTCIceTransport();
dtlsTr = new RTCDtlsTransport(iceTr);

iceGathr.onlocalcandidate = function(ev) {
  for (var can in ev.candidate) {
    if (ev.candidate.hasOwnProperty(can)) {
      log('\n>' + can + ': ' + ev.candidate[can]);
    }
  }
  console.log('candidate sent');
  socket.emit('candidate', {'candidate': ev.candidate});
};

socket.on('candidate', function (remote) {
  console.log('got remote candidate', remote.candidate);
  iceTr.addRemoteCandidate(remote.candidate);
});
