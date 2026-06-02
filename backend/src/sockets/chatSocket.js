// sockets/chatSocket.js
/**
 * Chat socket handlers.
 * This module receives the initialized Socket.IO server instance and registers
 * event listeners for real‑time chat communication.
 */
module.exports = (io) => {
  // When a client connects
  io.on('connection', (socket) => {
    console.log('💬 Chat socket connected:', socket.id);

    // Join a chat room (e.g., based on ticket ID or department)
    socket.on('joinRoom', (roomId) => {
      socket.join(roomId);
      console.log(`Socket ${socket.id} joined chat room ${roomId}`);
    });

    // Receive a chat message from a client and broadcast to the room
    socket.on('chatMessage', ({ roomId, userId, message }) => {
      if (!roomId) return;
      const payload = { userId, message, timestamp: new Date() };
      io.to(roomId).emit('chatMessage', payload);
      console.log(`Message in ${roomId} from user ${userId}: ${message}`);
    });

    // Handle client disconnect
    socket.on('disconnect', () => {
      console.log('💬 Chat socket disconnected:', socket.id);
    });
  });
};
