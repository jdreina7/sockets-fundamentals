const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado!');

    client.emit('saludarUsuario',  {
        user: 'Administrador',
        message: 'Bienvenido a la aplicación!'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado!');
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('saludarUsuario', data);

        // if (mensaje.user) {
        //     callback({
        //         resp: 'Mensaje recibido!'
        //     });
        // } else {
        //     callback({
        //         resp: 'ERROR: NO SE RECIBIÓ NINGÚN MENSAJE'
        //     });
        // }

    });
});