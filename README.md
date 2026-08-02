# Full Stack Calculator Application

A premium, full-stack calculator application built with a React (Vite) frontend and a Node.js (Express) backend. It features a modern "glassmorphism" design and performs operations via REST API endpoints to enforce a strict separation of concerns.

## 🚀 Quick Start (Docker)

The easiest way to run both the frontend and backend simultaneously is using Docker Compose.

**Prerequisites:** Docker and Docker Compose installed.

1. Clone this repository.
2. Navigate to the root directory.
3. Run the following command:
   ```bash
   docker compose up --build -d
   ```
4. Access the application:
   - **Frontend UI:** `http://localhost:5173`
   - **Backend API:** `http://localhost:3000`

---

## 💻 Manual Setup & Local Development

If you prefer to run the application locally without Docker, you will need **Node.js v20+** installed.

### 1. Backend Setup

The backend is an Express server running on port `3000`.

```bash
cd backend
npm install
npm run dev
```

### 2. Frontend Setup

The frontend is a React application powered by Vite, running on port `5173`.

```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Testing

Both layers are equipped with unit tests powered by **Vitest**.

**Run Backend Tests:**
```bash
cd backend
npm test
```

**Run Frontend Tests:**
```bash
cd frontend
npm test
```

---

## 🏗️ Architecture & Documentation

- **[High-Level Architecture](./ARCHITECTURE.md):** Learn about the business logic and layer separation.
- **[Backend API Documentation](./backend/API.md):** Details on the RESTful endpoints and payload structures.
- **[Frontend Components](./frontend/src/components/README.md):** Information about the React component structure.
- **Continuous Integration:** The repository includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that automatically runs linting, unit tests, frontend builds, and tests the docker-compose image compilation on every push or pull request to `main`.
