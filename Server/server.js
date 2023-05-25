const express = require('express')
require('dotenv').config()
const { dbConnection } = require('../database/config')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.server = require('http').createServer(this.app);

        this.paths = {
            auth: '/api/auth',
            task: '/api/task'
        }

        this.connectToDB()
        this.addMiddlewares()
        this.setRoutes()
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
        this.app.use("/", (req, res) => {
            res.send("Hola mundo")
            })
        }

    listen() {
        this.server.listen(this.port, () => {
            console.log(
                `Servidor corriendo en puerto ${this.port}`
            );
        });
    }
}

module.exports = Server