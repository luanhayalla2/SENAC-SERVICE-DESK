# 🏢 SmartDesk SENAC-MA

<div align="center">
  <p><strong>A Modern, Scalable, and Professional Help-Desk Web Application for SENAC-MA</strong></p>
</div>

<div align="center">

  [![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
  [![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
  [![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
  [![Nginx](https://img.shields.io/badge/Nginx-Proxy-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)

</div>

---

## 📖 Overview

**SmartDesk SENAC-MA** is an enterprise-grade service desk solution tailored for educational institutions. Designed with efficiency and modern aesthetics in mind, it provides a unified platform to manage IT and facility tickets, ensuring no request is left unanswered.

The system features advanced SLA tracking, intelligent multi-tier routing (N1/N2/N3), role-based access control, and a sleek, dynamic dark-mode user interface powered by glassmorphism design principles.

## ✨ Key Features

- **🛡️ Role-Based Access Control (RBAC):** Distinct portals for Alunos (Students), Professores (Teachers), Colaboradores (Staff), Support Tiers (N1/N2/N3), and Administrators.
- **⚡ Intelligent Ticket Routing:** Automatic assignment based on category and complexity.
- **⏱️ SLA Management:** Real-time monitoring of response and resolution times, with automatic escalation alerts.
- **🔔 Real-Time Communications:** Live notifications and integrated chat capabilities powered by `Socket.io`.
- **📊 Interactive Dashboards:** KPI visualization and performance tracking utilizing `Chart.js`.
- **🎨 Premium UI/UX:** A state-of-the-art dark-mode interface with responsive glassmorphism components.
- **📄 Comprehensive Reporting:** Generate and export detailed system audits and SLA reports in PDF/Excel formats.
- **🐳 Cloud-Ready:** Fully containerized architecture using Docker and Nginx reverse proxy.

---

## 🛠️ Technology Stack

### Backend
- **Core:** Node.js, Express.js
- **Database:** MySQL 8.0, Sequelize ORM
- **Authentication:** JWT (JSON Web Tokens), bcrypt
- **Real-time:** Socket.io
- **File Uploads:** Multer

### Frontend
- **Structure & Logic:** HTML5, CSS3, Vanilla JavaScript
- **Styling:** Custom CSS with CSS Variables, Dark Mode, and Glassmorphism
- **Icons & Fonts:** Google Fonts (Outfit, Inter)

### Infrastructure
- **Containers:** Docker, Docker Compose
- **Proxy/Web Server:** Nginx (Alpine)

---

## 🚀 Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker & Docker Compose](https://www.docker.com/products/docker-desktop)
- [Git](https://git-scm.com/)

### 1. Installation

Clone the repository and install the backend dependencies:

```bash
# Clone the repository
git clone https://github.com/your-org/senac-service-desk.git
cd senac-service-desk

# Install backend dependencies
cd backend
npm install
cd ..
```

### 2. Environment Configuration

Copy the example environment file and configure your variables:

```bash
cp backend/.env.example backend/.env
```
*(Ensure you update the `.env` file with secure passwords and JWT secrets for production).*

### 3. Running the Application

**Using Docker (Recommended for complete environment):**
```bash
# Start all services (Database, Backend API, Nginx Frontend)
docker-compose up -d
```
The application will be accessible at: `http://localhost:8080`

**Local Development (Backend only):**
```bash
cd backend
npm run dev
```
The backend API will run on `http://localhost:3000`.

---

## 📂 Project Structure

```text
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
│   ├── src/
│   │   ├── config/          # DB, JWT, Multer, Socket configs
│   │   ├── controllers/     # Route handlers & business logic
│   │   ├── middlewares/     # Auth, Roles, Uploads, Rate Limiting
│   │   ├── models/          # Sequelize Models (User, Ticket, SLA, etc.)
│   │   ├── services/        # Core business operations (Routing, SLA monitoring)
│   │   ├── routes/          # Express API route definitions
│   │   ├── sockets/         # Socket.io event handlers
│   │   ├── jobs/            # Background cron jobs (SLA monitor, cleanup)
│   │   ├── utils/           # Loggers, formatters, helpers
│   │   ├── app.js           # Express App setup
│   │   └── server.js        # HTTP & Socket Server bootstrap
│   ├── tests/               # Jest test suites
│   ├── uploads/             # Media & Attachment storage
│   ├── Dockerfile           # Backend container build script
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── public/              # Static assets (favicon, manifest)
│   ├── src/
│   │   ├── assets/          # Images, Icons, Logos
│   │   ├── css/             # Global styles, variables, dark mode
│   │   ├── js/              # Client-side logic and API calls
│   │   ├── pages/           # HTML views (Login, Dashboard, Tickets)
│   │   ├── components/      # Reusable UI fragments (Modals, Navbars)
│   │   └── index.html       # Application Entry Point
│   └── Dockerfile           # Nginx frontend container build script
│
├── database/
│   ├── schema.sql           # Initial table creation script
│   ├── seeds.sql            # Dummy data and default admin seeds
│   ├── migrations/          # Schema evolution scripts
│   └── backups/             # Automated dump storage
│
├── nginx/
│   ├── nginx.conf           # Main Nginx configuration
│   └── default.conf         # Reverse proxy mapping
│
├── docker-compose.yml       # Multi-container orchestration
├── .gitignore
├── LICENSE
└── task.md                  # Project tracking
```

---

## 🔒 Security & Best Practices
- Passwords are symmetrically hashed using bcrypt.
- API endpoints are protected using stateless JWT authorization.
- Requests are monitored using rate limiting to prevent brute-force attacks.
- File uploads are strictly validated (MIME type and size limits).
- Audit trails log every significant system mutation for compliance.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
<div align="center">
  <small>Developed with ❤️ for SENAC-MA.</small>
</div>
