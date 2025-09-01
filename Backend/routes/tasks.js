const express = require('express');
const auth = require('../middleware/auth');
const Task = require('../models/Task');
const router = express.Router();

// Get all tasks
router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Add task
router.post('/', auth, async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTask = new Task({
      title,
      description,
      user: req.user.id
    });
    const task = await newTask.save();
    res.json(task);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Update task
router.put('/:id', auth, async (req, res) => {
  const { title, description, status } = req.body;
  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    task = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: { title, description, status } },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Delete task
router.delete('/:id', auth, async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Task.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Task removed' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
