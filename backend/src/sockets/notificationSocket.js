// sockets/notificationSocket.js
/**
 * Notification socket handlers.
 * This module receives the initialized Socket.IO server instance and registers
 * event listeners for real‑time notification delivery.
 */
module.exports = (io) => {
  // When a client connects
  io.on('connection', (socket) => {
    console.log('🔔 Notification socket connected:', socket.id);

    // Client can join a room for their user ID to receive personal notifications
    socket.on('subscribe', (userId) => {
      const room = `user_${userId}`;
      socket.join(room);
      console.log(`Socket ${socket.id} subscribed to ${room}`);
    });

    // Emit a notification to a specific user (called by the server‑side notification service)
    socket.on('notify', (payload) => {
      // Expected payload: { userId, type, message, ticketId }
      if (!payload || !payload.userId) return;
      const room = `user_${payload.userId}`;
      io.to(room).emit('notification', payload);
    });

    socket.on('disconnect', () => {
      console.log('🔔 Notification socket disconnected:', socket.id);
    });
  });
};
