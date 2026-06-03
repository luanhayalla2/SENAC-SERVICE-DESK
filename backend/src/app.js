// app.js
/**
 * Main Express application setup.
 * Configures middlewares, routes, error handling and exports the app instance.
 */
const express = require('express');
const cors = require('cors');
const path = require('path');
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

// Security headers – CSP allowing self and API calls
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        connectSrc: ["'self'"],
        imgSrc: ["'self'", "data:"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'", "'unsafe-inline'"]
      }
    }
  })
);

// Serve static assets (including .well-known files) from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Basic middlewares
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

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/knowledge', knowledgeRoutes);
app.use('/api/notifications', notificationRoutes);

// Health check root
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'SENAC Service Desk API is running.',
    version: '1.0.0'
  });
});

// Error handling (must be after routes)
app.use(errorMiddleware);

module.exports = app;
