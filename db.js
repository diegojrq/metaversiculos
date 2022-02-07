const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://admin:Senha-123@cluster0.xkxer.mongodb.net/playcee";

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true});

var connection = mongoose.connection

connection.on('error', () => {
    console.log('Connecton failed')
})

connection.on('connected', () => {
    console.log('Connecton suceed')
})

module.exports = mongoose