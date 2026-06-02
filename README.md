# SmartDesk SENAC-MA

Professional help‑desk web application for **SENAC‑MA**.

## Features

- Role‑based ticket management (Aluno, Professor, Colaborador, N1/N2/N3, Administrador)
- Automatic routing based on complexity (Simple → N1, Intermediate → N2, Advanced → N3)
- Real‑time notifications via Socket.IO
- Dark‑mode UI with premium glass‑morphism cards (Bootstrap 5 + custom CSS)
- Dashboard with Chart.js visualising KPIs and SLA
- PDF / Excel export, audit logs, file uploads
- Dockerised development environment (Node backend, MySQL database)

## Quick Start

```bash
# Clone / copy the project
cd "C:/Users/aluno/Desktop/SENAC SERVICE DESK"
# Install dependencies
npm install
# Start containers
docker compose up -d
# Run the backend (dev)
npm run dev
```

Open `http://localhost:3000` in a browser.

## Project Structure

```
SENAC-SERVICE-DESK/
│
├── docs/
│   ├── requisitos-funcionais.md
│   ├── requisitos-nao-funcionais.md
│   ├── regras-de-negocio.md
│   ├── fluxos-atendimento.md
│   ├── api-documentation.md
│   └── arquitetura.md
│
├── backend/
│   │
│   ├── src/
│   │   │
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   ├── jwt.js
│   │   │   ├── multer.js
│   │   │   ├── socket.js
│   │   │   └── mail.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── userController.js
│   │   │   ├── ticketController.js
│   │   │   ├── dashboardController.js
│   │   │   ├── reportController.js
│   │   │   ├── categoryController.js
│   │   │   ├── knowledgeController.js
│   │   │   └── notificationController.js
│   │   │
│   │   ├── middlewares/
│   │   │   ├── authMiddleware.js
│   │   │   ├── roleMiddleware.js
│   │   │   ├── rateLimitMiddleware.js
│   │   │   ├── uploadMiddleware.js
│   │   │   ├── auditMiddleware.js
│   │   │   └── errorMiddleware.js
│   │   │
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Unit.js
│   │   │   ├── Department.js
│   │   │   ├── Position.js
│   │   │   ├── Ticket.js
│   │   │   ├── Category.js
│   │   │   ├── SubCategory.js
│   │   │   ├── Comment.js
│   │   │   ├── Attachment.js
│   │   │   ├── Notification.js
│   │   │   ├── History.js
│   │   │   ├── SLA.js
│   │   │   └── AuditLog.js
│   │   │
│   │   ├── services/
│   │   │   ├── routingService.js
│   │   │   ├── slaService.js
│   │   │   ├── reportService.js
│   │   │   ├── notificationService.js
│   │   │   ├── emailService.js
│   │   │   └── auditService.js
│   │   │
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── userRoutes.js
│   │   │   ├── ticketRoutes.js
│   │   │   ├── dashboardRoutes.js
│   │   │   ├── reportRoutes.js
│   │   │   ├── categoryRoutes.js
│   │   │   ├── knowledgeRoutes.js
│   │   │   └── notificationRoutes.js
│   │   │
│   │   ├── sockets/
│   │   │   ├── notificationSocket.js
│   │   │   └── chatSocket.js
│   │   │
│   │   ├── jobs/
│   │   │   ├── slaMonitor.js
│   │   │   ├── emailQueue.js
│   │   │   └── cleanupLogs.js
│   │   │
│   │   ├── utils/
│   │   │   ├── logger.js
│   │   │   ├── formatter.js
│   │   │   ├── validators.js
│   │   │   └── helpers.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── tests/
│   │   ├── auth.test.js
│   │   ├── ticket.test.js
│   │   ├── dashboard.test.js
│   │   └── report.test.js
│   │
│   ├── uploads/
│   │   ├── chamados/
│   │   ├── usuarios/
│   │   └── base-conhecimento/
│   │
│   ├── Dockerfile
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   │
│   ├── public/
│   │   ├── favicon.ico
│   │   └── manifest.json
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   ├── icons/
│   │   │   └── logos/
│   │   │
│   │   ├── css/
│   │   │   ├── variables.css
│   │   │   ├── dark-mode.css
│   │   │   ├── dashboard.css
│   │   │   ├── tickets.css
│   │   │   └── global.css
│   │   │
│   │   ├── js/
│   │   │   ├── api.js
│   │   │   ├── auth.js
│   │   │   ├── dashboard.js
│   │   │   ├── tickets.js
│   │   │   ├── notifications.js
│   │   │   └── reports.js
│   │   │
│   │   ├── pages/
│   │   │   ├── login.html
│   │   │   ├── dashboard.html
│   │   │   ├── tickets.html
│   │   │   ├── ticket-details.html
│   │   │   ├── usuarios.html
│   │   │   ├── unidades.html
│   │   │   ├── relatorios.html
│   │   │   ├── auditoria.html
│   │   │   └── conhecimento.html
│   │   │
│   │   ├── components/
│   │   │   ├── sidebar.html
│   │   │   ├── navbar.html
│   │   │   ├── footer.html
│   │   │   ├── cards.html
│   │   │   └── modals.html
│   │   │
│   │   └── index.html
│   │
│   └── Dockerfile
│
├── database/
│   ├── schema.sql
│   ├── seeds.sql
│   ├── migrations/
│   └── backups/
│
├── nginx/
│   ├── nginx.conf
│   └── default.conf
│
├── docker-compose.yml
├── .gitignore
├── README.md
├── LICENSE
└── task.md

```
