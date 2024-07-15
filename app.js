const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const morgan = require("morgan");
const router = require("./src/routers/apis");

const app = express();

// CORS Options
const corsOptions = {
  origin: ["*"],
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Express Server" });
});

// API routes
app.use("/api/v1", router);

// Invalid URL handler
app.all("*", (req, res, next) => {
  next(createError(404, { message: "Invalid URL" }));
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
