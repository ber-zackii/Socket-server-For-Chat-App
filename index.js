const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://academixclient.azurewebsites.net",
    methods: ["GET", "POST"]
  }
});

let onlineUsers = [];

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  // Listen for new user connection
  socket.on("addNewUser", (userId) => {
    if (!onlineUsers.some((user) => user.userId === userId)) {
      onlineUsers.push({
        userId,
        socketId: socket.id,
      });
    }
    console.log("online users: ", onlineUsers);
    io.emit("getOnlineUser", onlineUsers);
  });

  // Listen for sending messages
  socket.on("sendMessage", (message) => {
    const user = onlineUsers.find((user) => user.userId === message.recipientId);
    if (user) {
      console.log("Received message:", message);
      io.to(user.socketId).emit("getMessage", message);
      io.to(user.socketId).emit("getNotification", {
        senderId: message.senderId,
        isRead: false,
        date: new Date(),
      });
    }
  });

  // Listen for user disconnection
  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
    io.emit("getOnlineUser", onlineUsers);
  });
});

app.get('/', (req, res) => {
  res.send('Welcome to web');
});

const PORT = 2000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
