const express = require("express");
const router = express.Router();

// Import all routers
const routers = [
  require("./BookRouter"),
  require("./PublisherRouter"),
  require("./DepartmentRouter"),
  require("./SemesterRouter"),
];

// Dynamically apply routers
routers.forEach((route) => router.use(route));

module.exports = router;
