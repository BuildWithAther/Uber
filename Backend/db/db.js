const mongoose = require("mongoose");

function connectToDb() {
    const dbUri = process.env.DB_CONNECT;

    if (!dbUri) {
        console.error("DB_CONNECT environment variable is not set");
        return;
    }

    mongoose.connect(dbUri)
        .then(() => {
            console.log("Connected to DB");
        })
        .catch(err => {
            console.log("Error connecting to DB:", err);
        });
}

module.exports = connectToDb;
