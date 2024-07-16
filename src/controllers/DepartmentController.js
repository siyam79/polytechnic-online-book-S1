const Department = require("../models/Department");

exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    if (!department)
      return res.status(404).json({ message: "Department not found" });
    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createDepartment = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newDepartment = new Department({
      name,
      description,
    });
    await newDepartment.save();
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateDepartmentById = async (req, res) => {
  try {
    const department = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!department)
      return res.status(404).json({ message: "Department not found" });
    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteDepartmentById = async (req, res) => {
  try {
    const department = await Department.findByIdAndDelete(req.params.id);
    if (!department)
      return res.status(404).json({ message: "Department not found" });
    res.status(200).json({ message: "Department deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
