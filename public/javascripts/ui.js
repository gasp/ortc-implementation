$(function () {
  $('#ice_init').on('click', function () {
    ice.init();
  });
  $('#ice_negociate').on('click', function () {
    ice.negociate();
  });
  $('#ice_send').on('click', function () {
    ice.send();
  });
  $('#gum').on('click', function () {
    gum();
  });
  $('#start').on('click', function () {
    start();
  });
});
