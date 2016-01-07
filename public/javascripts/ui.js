$(function () {
  $('#ice_init').on('click', function (ev) {
    ice.init();
    ev.stopPropagation();
    return false;
  });
  $('#ice_negociate').on('click', function (ev) {
    ice.negociate();
    ev.stopPropagation();
    return false;
  });
  $('#ice_send').on('click', function (ev) {
    ice.send();
    ev.stopPropagation();
    return false;
  });
  $('#transport').on('click', function (ev) {
    transport.init();
    ev.stopPropagation();
    return false;
  });
  $('#gum').on('click', function (ev) {
    gum();
    ev.stopPropagation();
    return false;
  });
  $('#start').on('click', function (ev) {
    stream.start();
    ev.stopPropagation();
    return false;
  });
});
