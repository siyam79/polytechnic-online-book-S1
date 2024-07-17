const mongoose = require("mongoose");
const { mongodbURL } = require("./secret");
require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose.connect(mongodbURL, { dbName: process.env.DB_NAME });
    console.log("Connect to DB in successful");

    mongoose.connection.on("eror", (error) => {
      console.error("DB connection error ", error);
    });
  } catch (error) {
    console.error("Couldn't connect to DB:", );
  }
};

module.exports = connectDB;
