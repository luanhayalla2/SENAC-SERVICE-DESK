// app.js
/**
 * Main Express application setup.
 * Configures middlewares, routes, error handling and exports the app instance.
 */
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('./utils/logger');

// Middlewares
const authMiddleware = require('./middlewares/authMiddleware');
const roleMiddleware = require('./middlewares/roleMiddleware');
const rateLimitMiddleware = require('./middlewares/rateLimitMiddleware');
const uploadMiddleware = require('./middlewares/uploadMiddleware');
const auditMiddleware = require('./middlewares/auditMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');

// Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const reportRoutes = require('./routes/reportRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const knowledgeRoutes = require('./routes/knowledgeRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();

// Basic security & parsing
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
});

// Apply custom middlewares
app.use(authMiddleware);
app.use(rateLimitMiddleware);
app.use(uploadMiddleware);
app.use(auditMiddleware);
app.use(roleMiddleware);

// Mount routes (prefix as needed)
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/knowledge', knowledgeRoutes);
app.use('/api/notifications', notificationRoutes);

// Error handling (must be after routes)
app.use(errorMiddleware);

module.exports = app;
