const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  regId: {
    type: Number,
    required: [true, "RegId is compulsory"],
  },
  name: {
    type: String,
    required: [true, "Name is compulsory"],
  },
  course: {
    type: String,
    required: [true, "Course is compulsory"],
  },
  section: {
    type: String,
    required: [true, "Section is compulsory"],
    default: "A",
  },
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;