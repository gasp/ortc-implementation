var stream = {};

var start = function () {
  var audioTrack = stream.getAudioTracks()[0];
  var videoTrack = stream.getVideoTracks()[0];
  var audioSender = new RTCRtpSender(audioTrack, dtlsTr);
  var videoSender = new RTCRtpSender(videoTrack, dtlsTr);
  var audioReceiver = new RTCRtpReceiver(dtlsTr, 'audio');
  var videoReceiver = new RTCRtpReceiver(dtlsTr, 'video');
};
