const express = require('express');
const app = express();
const port = 3000;

// default route
app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

// tasks route
app.get('/tasks', (req, res) => {
  const tasks = [
    { id: 1, title: 'Learn Node.js', completed: false, priority: 'high', createdAt: new Date() },
    { id: 2, title: 'Build REST API', completed: true, priority: 'medium', createdAt: new Date() },
    { id: 3, title: 'Test API with Postman', completed: false, priority: 'low', createdAt: new Date() },
    { id: 4, title: 'Write Documentation', completed: false, priority: 'medium', createdAt: new Date() },
    { id: 5, title: 'Deploy App', completed: false, priority: 'high', createdAt: new Date() }
  ];

  res.json(tasks);
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
