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
// should be called "intersect"
stream.myCapsToSendParams = function (sendCaps, remoteCaps) {
  // return the same
  return stream.myCapsToRecvParams(remoteCaps, sendCaps);
};
stream.myCapsToRecvParams = function (sendCaps, remoteCaps) {
  var codecs = (function (left, right) {
    // find intersection
    // better ways are on
    // http://stackoverflow.com/questions/1885557/simplest-code-for-array-intersection-in-javascript
    var codecPrms = [];
    if (left && right) {
      left.forEach(function (leftItem) {
        for (var i = 0; i < right.length; i++) {
          var codec = right[i];
          if (leftItem.name == codec.name && leftItem.kind === codec.kind &&
            leftItem.preferredPayloadType === codec.preferredPayloadType &&
            leftItem.numChannels === codec.numChannels) {

            codecPrms.push({
              name: codec.name,
              payloadType: codec.preferredPayloadType,
              clockRate: codec.clockRate,
              numChannels: codec.numChannels,
              rtcpFeedback: codec.rtcpFeedback,
              parameters: codec.parameters
            });
            break;
          }
        }
      });
    }
    return codecPrms;
  }(sendCaps.codecs, remoteCaps.codecs));

socket.on('capabilities', function (params) {
  console.log(params);
  return {
    muxId: '',
    codecs: codecs,
    headerExtensions: [],
    encodings: [],
    rtcp: {
        ssrc: 0,
        cname: '',
        reducedSize: false,
        mux: true
    }
  };
};
});
