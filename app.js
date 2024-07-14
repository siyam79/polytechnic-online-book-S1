const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const morgan = require("morgan");

// CORS Options
const corsOptions = {
  origin: ["*"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());

// Home router
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Express Server" });
});

// Invalid URL handler
app.all("*", (req, res, next) => {
  next(createError(404, { message: "Invalid URL" }));
});

// Client-side error handler
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
