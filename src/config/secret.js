require("dotenv").config();

const serverPORT = process.env.SERVER_RUNNING_PORT || 5000;
const mongodbURL1 = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rckmata.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const mongodbURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0umpeqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

module.exports = { serverPORT, mongodbURL };
