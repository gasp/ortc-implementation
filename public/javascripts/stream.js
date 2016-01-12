var stream = {
  local: {},
  remote: {}
};


var audioSender = null;
var videoSender = null;
var audioReceiver = null;
var videoReceiver = null;
var sendVideoCaps;

stream.start = function () {
  console.log('stream.start');
  //var audioTrack = stream.local.getAudioTracks()[0];
  var videoTrack = stream.local.getVideoTracks()[0];
  console.log('got local video stream', videoTrack);
  // audioSender looks buggy on this machine :-\
  // audioSender = new RTCRtpSender(audioTrack, dtlsTr);
  videoSender = new RTCRtpSender(videoTrack, dtlsTr);
  // audioReceiver = new RTCRtpReceiver(dtlsTr, 'audio');
  videoReceiver = new RTCRtpReceiver(dtlsTr, 'video');

  // create receivers and senders
  //var recvAudioCaps = RTCRtpReceiver.getCapabilities('audio');
  var recvVideoCaps = RTCRtpReceiver.getCapabilities('video');
  //var sendAudioCaps = RTCRtpSender.getCapabilities('audio');
  sendVideoCaps = RTCRtpSender.getCapabilities('video');
  var capabilities = {
    ice: iceGathr.getLocalParameters(), // bad design, but only a poc
    dtls: dtlsTr.getLocalParameters(), // bad design, but only a poc
    // recvAudioCaps: recvAudioCaps,
    recvVideoCaps: recvVideoCaps,
    // sendAudioCaps: sendAudioCaps,
    sendVideoCaps: sendVideoCaps
  };
  console.log(capabilities);
  socket.emit('capabilities', capabilities);
};

socket.on('capabilities', function (params) {
  console.log(params);
});
