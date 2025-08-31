const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
    const tasks = await Task.find({ user: req.user.userId });
    res.json(tasks);
};

exports.createTask = async (req, res) => {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ error: 'Title required' });
    const task = await Task.create({ title, description, user: req.user.userId });
    res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
    const task = await Task.findOne({ _id: req.params.id, user: req.user.userId });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    Object.assign(task, req.body);
    await task.save();
    res.json(task);
};

exports.toggleStatus = async (req, res) => {
    const task = await Task.findOne({ _id: req.params.id, user: req.user.userId });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    task.completed = !task.completed;
    await task.save();
    res.json(task);
};

exports.deleteTask = async (req, res) => {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.userId });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Deleted' });
};
