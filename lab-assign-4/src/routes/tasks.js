const express = require("express");
const router = express.Router();

const tasks = [
  { id: 1, title: "Complete assignment", done: false },
  { id: 2, title: "Buy groceries", done: true },
  { id: 3, title: "Go jogging", done: false }
];

// GET /task/:id
router.get("/:id", (req, res) => {
  const id = req.params.id;

  // Invalid ID (not a number)
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  const task = tasks.find(t => t.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
});

module.exports = router;
