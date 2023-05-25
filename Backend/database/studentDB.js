require("dotenv").config();
const mongoose = require('mongoose');

module.exports = function studentDB() {
  // Connect to MongoDB locally
  mongoose.connect("mongodb://0.0.0.0:27017/studentDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
}
