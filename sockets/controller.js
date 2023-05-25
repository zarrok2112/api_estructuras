const socketController = (socket, io) => {
    console.log('Cliente conectado', socket.id)

    socket.on('mensaje-de-cliente', (payload, callback) => {
        
        callback('Su mensaje fue recibido')
        payload.from = 'Desde el servidor'
        socket.broadcast.emit('mensaje-de-server', payload)
    })

    socket.on('disconnect', () => {
        console.log('Cliente desconectado')
    })

    socket.on('enviar-mensaje', ({to, from, mensaje}) => {
        if (to)
            socket.to(to).emit('recibir-mensaje', {to, from, mensaje})
        
        else
            io.emit('recibir-mensaje', {from, mensaje})
    })

}

module.exports = { socketController }