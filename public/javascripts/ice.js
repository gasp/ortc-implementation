// this code is edge only bacause it uses ORTC spec

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

iceGathr.onlocalcandidate = function(evt) {
  for (var can in evt.candidate) {
    if (evt.candidate.hasOwnProperty(can)) {
      log('\n>' + can + ': ' + evt.candidate[can]);
    }
  }
};
