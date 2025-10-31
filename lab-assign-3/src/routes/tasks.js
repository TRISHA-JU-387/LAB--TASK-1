const express = require('express');
const router = express.Router();

// Sample tasks
let tasks = [
    { id: 1, title: "Task 1", completed: false, priority: "low", createdAt: new Date() },
    { id: 2, title: "Task 2", completed: true, priority: "medium", createdAt: new Date() },
    { id: 3, title: "Task 3", completed: false, priority: "high", createdAt: new Date() },
    { id: 4, title: "Task 4", completed: true, priority: "low", createdAt: new Date() },
    { id: 5, title: "Task 5", completed: false, priority: "medium", createdAt: new Date() },
];

// GET /tasks
router.get('/tasks', (req, res) => {
    res.json(tasks);
});

// GET /task/:id
router.get('/task/:id', (req, res) => {
    const id = Number(req.params.id); // URL থেকে ID নেওয়া
    if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }

    const task = tasks.find(t => t.id === id);
    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
});

module.exports = router;
