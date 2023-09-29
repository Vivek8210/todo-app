const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// create a new task
router.post('/tasks', taskController.createTask);

// get tasks
router.get('/tasks', taskController.getAllTasks);

// update task 
router.put('/tasks/:id', taskController.updateTask);

// delete task
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
