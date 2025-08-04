const mongoose = require('mongoose');

const URI = "mongodb://0.0.0.0:27017/recipebook";

const dbConnection = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Database connected");
    } catch (err) {
        console.log(err);
    }
};

module.exports = dbConnection;
