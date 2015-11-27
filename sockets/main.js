module.exports = function (io) {
  var peers = [];
  io.on('connection', function (socket) {
    var peer = {
      id: socket.id,
      address: socket.handshake.address,
      ua: socket.handshake.headers['user-agent']
    };
    peers.push(peer);
    io.sockets.emit('peers', peers);

    socket.on('disconnect', function() {
      for (var i = 0; i < peers.length; i++) {
        if(socket.id === peers[i].id) {
          peers.splice(i, 1);
          break;
        }
      }
      io.sockets.emit('peers', peers);
    });

    console.log('connected');
  });
};
