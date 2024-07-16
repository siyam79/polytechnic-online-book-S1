const Publisher = require("../models/Publisher");

exports.getAllPublishers = async (req, res) => {
  try {
    const publishers = await Publisher.find();
    res.status(200).json(publishers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPublisherById = async (req, res) => {
  try {
    const publisher = await Publisher.findById(req.params.id);
    if (!publisher)
      return res.status(404).json({ message: "Publisher not found" });
    res.status(200).json(publisher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPublisher = async (req, res) => {
  const { name, address, contact } = req.body;
  try {
    const newPublisher = new Publisher({
      name,
      address,
      contact,
    });
    await newPublisher.save();
    res.status(201).json(newPublisher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePublisherById = async (req, res) => {
  try {
    const publisher = await Publisher.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!publisher)
      return res.status(404).json({ message: "Publisher not found" });
    res.status(200).json(publisher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePublisherById = async (req, res) => {
  try {
    const publisher = await Publisher.findByIdAndDelete(req.params.id);
    if (!publisher)
      return res.status(404).json({ message: "Publisher not found" });
    res.status(200).json({ message: "Publisher deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
