var stream = {
  local: {},
  remote: {}
};

var start = function () {
  var audioTrack = stream.local.getAudioTracks()[0];
  var videoTrack = stream.local.getVideoTracks()[0];
  console.log('got local video stream', videoTrack);
  var audioSender = new RTCRtpSender(audioTrack, dtlsTr);
  var videoSender = new RTCRtpSender(videoTrack, dtlsTr);
  var audioReceiver = new RTCRtpReceiver(dtlsTr, 'audio');
  var videoReceiver = new RTCRtpReceiver(dtlsTr, 'video');
};
