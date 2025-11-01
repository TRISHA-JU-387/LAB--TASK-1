import express from "express";
const app = express();

app.get("/", (req, res) => res.send("Welcome to Task Manager API!"));
app.get("/tasks", (req, res) => res.json(["Task 1", "Task 2"]));
app.get("/task/:id", (req, res) => res.json({ id: req.params.id }));
app.get("/health", (req, res) => res.json({ status: "ok" }));

app.listen(3000, () => console.log(" Server running on http://localhost:3000"));
