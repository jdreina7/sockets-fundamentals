var socket = io();

// ON = Escuchar
socket.on('connect', function () {
    console.log('Conectado al server!');
});

socket.on('disconnect', function () {
    console.log('Se perdió la conexión con el servidor!');
});

// Emit = Emitir o Enviar
socket.emit('enviarMensaje', {
    user: 'Juan David Reina',
    message: 'Hola, soy yo :)'
}, function (resp) {
    console.log('SERVER: ', resp);
});

socket.on('saludarUsuario', function (mensaje) {
    console.log('Servidor dice:', mensaje);
});