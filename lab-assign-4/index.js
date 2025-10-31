const express = require('express');
const app = express();
const port = 3000;

// Make sure this path is correct 👇
const tasksRouter = require('./src/routes/tasks');

app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
