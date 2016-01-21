$(function () {
  var green = function (el) {
    $(el).addClass('green');
  };
  var orange = function (el) {
    $(el).addClass('orange');
  };
  $('#ice_init').on('click', function (ev) {
    var that = this;
    ice.init(function () {
      console.log('done');
      green(that);
    });
    ev.stopPropagation();
    orange(that);
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
