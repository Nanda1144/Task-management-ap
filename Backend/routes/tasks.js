const express = require('express');
const {
    getTasks, createTask, updateTask, deleteTask, toggleStatus
} = require('../controllers/taskController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);
router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.patch('/:id/toggle', toggleStatus);
router.delete('/:id', deleteTask);

module.exports = router;
