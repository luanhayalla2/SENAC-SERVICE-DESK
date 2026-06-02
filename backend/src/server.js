require('dotenv').config();
const http = require('http');
const app = require('./app');
const { initSocket } = require('./config/socket');

// Port configuration
const PORT = process.env.PORT || 3000;

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
const io = initSocket(server);

// Load socket event handlers
require('./sockets/notificationSocket')(io);
require('./sockets/chatSocket')(io);

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

module.exports = { server, io };
