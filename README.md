# 📚 Manual do Projeto SmartDesk SENAC‑MA

<div align="center">
  <p><strong>Aplicação de Help‑Desk moderna, escalável e profissional para o SENAC‑MA</strong></p>
</div>

<div align="center">
  [![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
  [![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
  [![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
  [![Nginx](https://img.shields.io/badge/Nginx-Proxy-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)
</div>

---

## 📖 Visão Geral

**SmartDesk SENAC‑MA** é uma solução de service‑desk de nível corporativo dirigida a instituições de ensino. O sistema centraliza o atendimento de chamados de TI e de infraestrutura, garantindo que **nenhum pedido fique sem responsável**. Ele inclui rastreamento de SLA, roteamento automático por complexidade (N1/N2/N3) e controle de acesso baseado em papéis (RBAC).

## ✨ Principais Funcionalidades

- **🛡️ Controle de Acesso (RBAC):** Portais dedicados para Alunos, Professores, Colaboradores, Níveis de Suporte (N1/N2/N3) e Administradores.
- **⚡ Roteamento Inteligente:** Distribuição automática de chamados conforme categoria e grau de complexidade.
- **⏱️ Gestão de SLA:** Monitoramento em tempo real dos tempos de resposta e resolução, com alertas de escalonamento.
- **🔔 Notificações em Tempo Real:** Integração com `Socket.io` para avisos instantâneos e chat interno.
- **📊 Dashboards Interativos:** Visualização de KPIs com `Chart.js`.
- **🎨 UI Premium:** Interface escura com componentes de *glass‑morphism*.
- **📄 Relatórios Completo:** Exportação de auditorias e métricas em PDF/Excel.
- **🐳 Cloud‑Ready:** Arquitetura totalmente containerizada (Docker + Nginx).

## 🛠️ Tecnologias Utilizadas

- **Backend:** Node.js, Express.js, Sequelize ORM, JWT, bcrypt, Multer, Socket.io.
- **Banco de Dados:** MySQL 8.0.
- **Frontend:** HTML5, CSS3 (variáveis, modo escuro, glass‑morphism), JavaScript puro.
- **Infraestrutura:** Docker, Docker Compose, Nginx.

## 📦 Pré‑requisitos

Antes de iniciar, certifique‑se de que as seguintes ferramentas estão instaladas:
- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Docker & Docker‑Compose](https://www.docker.com/products/docker-desktop)
- [Git](https://git-scm.com/)

## 📥 Instalação

```bash
# Clonar o repositório
git clone https://github.com/your-org/senac-service-desk.git
cd senac-service-desk

# Instalar as dependências do backend
cd backend
npm install
cd ..
```

## ⚙️ Configuração do Ambiente

```bash
# Copiar o arquivo de exemplo de variáveis de ambiente
cp backend/.env.example backend/.env
```
> **Atenção:** Edite o arquivo `backend/.env` inserindo senhas seguras, segredos JWT e credenciais do banco de dados.

## 🚀 Execução da Aplicação

### Opção 1 – Docker (recomendado)
```bash
# Inicia todos os containers (MySQL, Backend, Frontend, Nginx)
docker‑compose up -d
```
A aplicação ficará disponível em **http://localhost:8080**.

### Opção 2 – Desenvolvimento Local (apenas Backend)
```bash
cd backend
npm run dev
```
A API será exposta em **http://localhost:3000**.

## 📂 Estrutura do Projeto

```text
SENAC‑SERVICE‑DESK/
├─ docs/                 # Documentação de requisitos e arquitetura
├─ backend/              # API (Express, Sequelize, sockets, jobs)
│   ├─ src/
│   │   ├─ config/       # Configurações de BD, JWT, Multer, Socket
│   │   ├─ controllers/  # Lógica de negócio das rotas
│   │   ├─ middlewares/  # Auth, RBAC, rate‑limit, upload, auditoria
│   │   ├─ models/       # Entidades Sequelize (User, Ticket, SLA…)
│   │   ├─ services/     # Operações de domínio (roteamento, SLA)
│   │   ├─ routes/       # Definições de rotas REST
│   │   ├─ sockets/      # Handlers de Socket.io
│   │   ├─ jobs/         # Cron jobs (monitor SLA, limpeza)
│   │   ├─ utils/        # Loggers, formatadores, helpers
│   │   ├─ app.js        # Configuração do Express
│   │   └─ server.js     # Bootstrap HTTP + Socket.io
│   ├─ tests/            # Testes Jest
│   ├─ uploads/          # Armazenamento de arquivos anexados
│   ├─ Dockerfile        # Dockerfile do backend
│   └─ package.json
├─ frontend/             # UI estática (HTML, CSS, JS)
│   ├─ public/           # favicon, manifest
│   └─ src/
│       ├─ assets/       # Imagens, ícones, logos
│       ├─ css/          # Variáveis, modo escuro, componentes
│       ├─ js/           # Lógica cliente e chamadas API
│       ├─ pages/        # Views (login, dashboard, tickets…)
│       ├─ components/   # Fragmentos reutilizáveis (modais, navbar)
│       └─ index.html    # Página de entrada
├─ database/             # Scripts SQL (schema, seeds, migrations)
├─ nginx/                # Configurações do proxy reverso
├─ docker-compose.yml    # Orquestração multi‑container
├─ .gitignore
├─ LICENSE
└─ README.md
```

## 🔐 Segurança e Boas Práticas
- Senhas são armazenadas com hash **bcrypt**.
- Todos os endpoints são protegidos por **JWT**.
- Limitação de requisições (**rate‑limit**) impede ataques de força‑bruta.
- Uploads são validados quanto a tipo MIME e tamanho.
- **Audit Logs** registram todas as alterações críticas para conformidade.

## 📄 Licença
Este projeto está licenciado sob a licença **MIT** – veja o arquivo [LICENSE](LICENSE) para detalhes.

---
<div align="center">
  <small>Desenvolvido com ❤️ para o SENAC‑MA.</small>
</div>
