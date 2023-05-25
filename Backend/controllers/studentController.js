const StudentData = require("../models/studentModel");

const getStudents = async (req, res) => {
  // res.send(`<h1>hey this is student page</h1>`);
  try {
    const allStudents = await StudentData.find();
    res.status(200).json(allStudents);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createStudent = async (req, res) => {
  const student = req.body;

  // Check if any required field is missing
  if (!student.regId || !student.name || !student.course) {
    return res.status(400).send({ success: false, message: "Missing required fields." });
  }

  try {
    const existingStudent = await StudentData.findOne({ regId: student.regId });
    if (existingStudent) {
      return res.status(409).json({ message: "RegId already exists." });
    }

    const newStudent = new StudentData(student);
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const deleteStudent = async (req, res) => {
  const id = req.params.id;

  try { 
    await StudentData.findByIdAndRemove(id).exec();
    res.send("Succesfully deleted");
  }
  catch (err) {
    console.log(err);
  }
};

module.exports = { getStudents, createStudent, deleteStudent };