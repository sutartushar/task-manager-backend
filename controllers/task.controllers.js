const Task = require("../models/task.models");

const retriveAllTask = async (req, res) => {
  try {
    let tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewTask = async (req, res) => {
  let { title, description, completed } = req.body;
  try {
    let newTask = await new Task({ title, description, completed }).save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    let updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    let task = await Task.findById(req.params.id).exec();
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    await Task.deleteOne({ _id: req.params.id });
    res.json({ message: "Task deleted" });
  } catch (error) {
    console.error("Error deleting task:", error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { retriveAllTask, addNewTask, updateTask, deleteTask };
