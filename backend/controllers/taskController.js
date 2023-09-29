const Task = require('../models/task');

// create a new task
exports.createTask = async (req, res) => {
    try {
        const { title } = req.body;
        const task = new Task({ title });
        await task.save();
        res.status(201).json({ message: 'Task created successfully', task });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the task' });
    }
};

// Get  tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching tasks' });
    }
};
// Update task 
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { completed } = req.body;

        const task = await Task.findByIdAndUpdate(
            id,
            { completed },
            { new: true }
        );

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the task' });
    }
};

// Delete task
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the task' });
    }
};
