var socket = io();

socket.on('connect', function() {
    console.log('Conected to server');

    socket.emit('createMessage', {
        from: 'Me',
        text: 'It\'s working'
    })
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('New message received:', message);
});
