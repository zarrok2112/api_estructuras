const express = require('express')
require('dotenv').config()
const { dbConnection } = require('../database/config')
const cors = require('cors')
const { Socket } = require('socket.io')
const {socketController} = require('../sockets/controller')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.server = require('http').createServer(this.app)
        this.io = require('socket.io')(this.server, this.headers)

        this.paths = {
            auth: '/api/auth',
            task: '/api/task',
            social: '/api/social',
            user: '/api/user'
        }

        this.connectToDB()
        this.addMiddlewares()
        this.setRoutes()

        this.sockets()
    }

    async connectToDB(){
        await dbConnection()
    }

    addMiddlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }

    setRoutes(){
        this.app.use(this.paths.auth, require('../routes/auth'))
        this.app.use(this.paths.task, require('../routes/task'))
        this.app.use(this.paths.social, require('../routes/social'))
        this.app.use(this.paths.user, require('../routes/user'))
    }
    
    listen(){
        this.app.listen(this.port,() => {
            console.log('El servidor está corriendo en el puerto: ', process.env.PORT)
        })
    }

    sockets(){
        this.io.on('connection', (socket) => socketController(socket, this.io))
    }
}

module.exports = Server