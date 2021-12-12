require('dotenv').config()

// import mongoose package
const mongoose = require('mongoose')

// declare a Database string URI
const DB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@projects.ick0o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// establishing a database connection
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

// export the connection object
module.exports = connection