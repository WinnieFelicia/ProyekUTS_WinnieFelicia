const express = require('express');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const WebSocket = require("ws");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

const wss = new WebSocket.Server({ port: 8080 });
let clients = [];
wss.on("connection", (ws) => {
    console.log("Client terhubung");
    ws.send("Selamat datang!");
});

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/', taskRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
