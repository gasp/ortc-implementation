var dtlsTr = null;

var transport = {
  init: function () {
    console.log('transport.init');
    dtlsTr = new RTCDtlsTransport(iceTr);
  }
};
