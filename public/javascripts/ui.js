$(function () {
  green = function (el) {
    $(el).addClass('green');
  };
  $('#ice_init').on('click', function (ev) {
    ice.init();
    ev.stopPropagation();
    green(this);
    return false;
  });
  $('#ice_negociate').on('click', function (ev) {
    ice.negociate();
    ev.stopPropagation();
    green(this);
    return false;
  });
  $('#ice_send').on('click', function (ev) {
    ice.send();
    ev.stopPropagation();
    green(this);
    return false;
  });
  $('#transport').on('click', function (ev) {
    transport.init();
    ev.stopPropagation();
    green(this);
    return false;
  });
  $('#gum').on('click', function (ev) {
    gum();
    ev.stopPropagation();
    green(this);
    return false;
  });
  $('#stream').on('click', function (ev) {
    stream.start();
    ev.stopPropagation();
    green(this);
    return false;
  });
});
