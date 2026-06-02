# Backend Source Directory

This directory will contain the core server code organized by feature:

- **config/** – Database, JWT, file upload, socket, mail configurations.
- **controllers/** – Request handlers for auth, users, tickets, dashboards, reports, categories, knowledge base, notifications.
- **middlewares/** – Authentication, role‑based access, rate limiting, file upload handling, audit logging, error handling.
- **models/** – Sequelize models: User, Unit, Department, Position, Ticket, Category, SubCategory, Comment, Attachment, Notification, History, SLA, AuditLog.
- **services/** – Business logic: routing, SLA monitoring, reporting, notifications, email queue, audit service.
- **routes/** – Express routers mapping HTTP endpoints to controllers.
- **sockets/** – Socket.IO handlers for real‑time notifications and chat.
- **jobs/** – Background jobs (SLA monitor, email queue, log cleanup).
- **utils/** – Helper utilities (logger, formatter, validators, generic helpers).
- **app.js** – Express app initialization.
- **server.js** – Server bootstrap (HTTP & Socket.IO).

> Add the corresponding files and implementations as the project evolves.
