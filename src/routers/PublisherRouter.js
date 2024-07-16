const express = require("express");
const {
  getAllPublishers,
  getPublisherById,
  createPublisher,
  updatePublisherById,
  deletePublisherById,
} = require("../controllers/PublisherController");
const publisherRouter = express.Router();

publisherRouter.get("/publishers", getAllPublishers);
publisherRouter.get("/publishers/:id", getPublisherById);
publisherRouter.post("/publishers", createPublisher);
publisherRouter.put("/publishers/u/:id", updatePublisherById);
publisherRouter.delete("/publishers/d/:id", deletePublisherById);

module.exports = publisherRouter;
