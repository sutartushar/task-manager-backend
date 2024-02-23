const router = require("express").Router();
const {
  retriveAllTask,
  addNewTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controllers");

//retrive all the task
router.get("/alltask", retriveAllTask);
//add a new task
router.post("/addtask", addNewTask);
// Update a task's status
router.put("/updatetask/:id", updateTask);
// Delete a task
router.delete("/deletetask/:id", deleteTask);

module.exports = router;
