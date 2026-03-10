const taskService = require('../services/task.service');

const createTask = async (req, res) => {
    try {
        const newTask = await taskService.createTask(req.body);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllTasks = async (req, res) => {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
};

module.exports = { createTask, getAllTasks };