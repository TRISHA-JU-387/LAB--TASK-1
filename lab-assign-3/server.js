const express = require('express');
const app = express();
const tasksRouter = require('./src/routes/tasks');

app.use('/', tasksRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
