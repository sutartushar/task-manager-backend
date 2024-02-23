const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  completed: { type: Boolean, default: false },
});

const TaskModel = mongoose.model("Task", TaskSchema);
module.exports = TaskModel;
