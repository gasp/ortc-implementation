var log = function () {
  if (typeof jQuery !== 'undefined' && $('#log').length) {
    for (var i = 0; i < arguments.length; i++) {
      var div = document.createElement('div');
      $(div).html(arguments[i]);
      $('#log').append(div);
    }
  }
  else console.log(arguments);
};
