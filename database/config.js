const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://zarrok:123sofia321@cluster0.ifo1ean.mongodb.net/RickAndMorty", {
            autoIndex: true,
        });
        console.log("DB online")
    } catch (error) {
        console.log(error)
        //throw new Error("Error al iniciar la base de datos")
    }
}

module.exports = { dbConnection }