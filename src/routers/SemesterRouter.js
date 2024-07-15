const express = require("express");
const {
  getAllSemesters,
  getSemesterById,
  createSemester,
  updateSemesterById,
  deleteSemesterById,
} = require("../controllers/SemesterController");
const semestersRouter = express.Router();

semestersRouter.get("/semesters", getAllSemesters);
semestersRouter.get("/semesters/:id", getSemesterById);
semestersRouter.post("/semesters", createSemester);
semestersRouter.put("/semesters/u/:id", updateSemesterById);
semestersRouter.delete("/semesters/d/:id", deleteSemesterById);

module.exports = semestersRouter;
