var dtlsTr = null;

var transport = {
  init: function () {
    dtlsTr = new RTCDtlsTransport(iceTr);
  }
};
