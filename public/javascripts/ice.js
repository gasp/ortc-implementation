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

var iceGathr = null;
var iceTr = null;
var dtlsTr = null;
var candidates = [];

var ice = {
  init: function () {
    console.log('ice.init');
    iceGathr = new RTCIceGatherer(iceOptions);

    iceTr = new RTCIceTransport();
    dtlsTr = new RTCDtlsTransport(iceTr);
    iceGathr.onlocalcandidate = function(ev) {
      ice.candidates.push(ev.candidate);
    };
  },
  candidates: [],
  negociate: function () {
    console.log('ice.negociate');
    // entering negociation mode
    iceGathr.onlocalcandidate = function(ev) {
      for (var can in ev.candidate) {
        if (ev.candidate.hasOwnProperty(can)) {
          console.log('\n>' + can + ': ' + ev.candidate[can]);
        }
      }
      log('candidate negociated');
      socket.emit('candidate', ev.candidate);
    };

  },
  send: function () {
    console.log('ice.send');
    for (var i = 0; i < ice.candidates.length; i++) {
      socket.emit('candidate', ice.candidates[i]);
      log('candidate sent');
    }
  }
};


socket.on('candidate', function (candidate) {
  if (iceTr === null) {
    log('error: Some candidates has been received' +
      'but we are unable to process them as we are not in a negociate phase');
    alert('Unable to add remote candidate');
    return;
  }
  log('candidate received');
  iceTr.addRemoteCandidate(candidate);
});
