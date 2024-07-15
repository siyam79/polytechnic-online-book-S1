const Semester = require("../models/Semester");

// Get all semesters
exports.getAllSemesters = async (req, res) => {
  try {
    const semesters = await Semester.find();
    res.status(200).json(semesters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a semester by ID
exports.getSemesterById = async (req, res) => {
  try {
    const semester = await Semester.findById(req.params.id);
    if (!semester)
      return res.status(404).json({ message: "Semester not found" });
    res.status(200).json(semester);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new semester
exports.createSemester = async (req, res) => {
  const { name, description, startDate, endDate } = req.body;
  try {
    const newSemester = new Semester({
      name,
      description,
      startDate,
      endDate,
    });
    await newSemester.save();
    res.status(201).json(newSemester);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a semester by ID
exports.updateSemesterById = async (req, res) => {
  try {
    const semester = await Semester.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!semester)
      return res.status(404).json({ message: "Semester not found" });
    res.status(200).json(semester);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a semester by ID
exports.deleteSemesterById = async (req, res) => {
  try {
    const semester = await Semester.findByIdAndDelete(req.params.id);
    if (!semester)
      return res.status(404).json({ message: "Semester not found" });
    res.status(200).json({ message: "Semester deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
