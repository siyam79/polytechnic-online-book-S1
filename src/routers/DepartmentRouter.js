const express = require("express");
const {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartmentById,
  deleteDepartmentById,
} = require("../controllers/DepartmentController");
const departmentRouter = express.Router();

departmentRouter.get("/departments", getAllDepartments);
departmentRouter.get("/departments/:id", getDepartmentById);
departmentRouter.post("/departments", createDepartment);
departmentRouter.put("/departments/:id", updateDepartmentById);
departmentRouter.delete("/departments/:id", deleteDepartmentById);

module.exports = departmentRouter;
