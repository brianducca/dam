var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var nombreBD = "DAM";

// App settings from ENV VARS
const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT
} = process.env;

// Create the URL for connect to DB
var URL_CONNECTION =
    "mongodb://" + MONGO_USERNAME + ":" + MONGO_PASSWORD +
    "@" +
    MONGO_HOSTNAME + ":" + MONGO_PORT;

// create DB settings string
var dbSettings =
    " - MONGO_HOSTNAME: " + MONGO_HOSTNAME + "\n" +
    " - MONGO_PORT: " + MONGO_PORT + "\n" +
    " - MONGO_USERNAME: " + MONGO_USERNAME + "\n" +
    " - MONGO_PASSWORD: " + MONGO_PASSWORD + "\n";

console.log(dbSettings);

MongoClient.connect(URL_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
    if (err) {
        console.error(err);
        console.log("Error" + err)
        throw err;
    }
    console.log("Conectado a mongo");
    mongoConection.db = client.db(nombreBD);
    mongoConection.objectId = ObjectID;

});

module.exports = mongoConection;