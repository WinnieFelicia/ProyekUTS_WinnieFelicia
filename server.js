const express = require('express');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

const wss = new WebSocket.Server({ port: 3000 });
wss.on("connection", (ws) => {
    console.log("🔗 Client terhubung");
    ws.send("Selamat datang!");
});

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', taskRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
