// socket.js
// Configure Socket.IO for real‑time notifications
// This file will be imported by the main server (app.js) and passed the HTTP server instance.

const socketio = require('socket.io');

/**
 * Initialize Socket.IO with the given HTTP server.
 * @param {http.Server} server - The HTTP server created by Express.
 * @returns {socketio.Server} The initialized Socket.IO instance.
 */
function initSocket(server) {
  const io = socketio(server, {
    cors: {
      origin: '*', // adjust in production
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log('🟢 New client connected:', socket.id);
    // Define event handlers here, e.g., notification events
    socket.on('disconnect', () => {
      console.log('🔴 Client disconnected:', socket.id);
    });
  });

  return io;
}

module.exports = { initSocket };
