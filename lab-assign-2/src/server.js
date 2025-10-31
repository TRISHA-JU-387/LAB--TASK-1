const express = require('express');
const app = express();
const PORT = 3000;
// Health check route
app.get('/health', (req, res) => {
    res.json({
        status: "healthy",
        uptime: process.uptime() 
    });
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
