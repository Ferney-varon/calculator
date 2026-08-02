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

---

## 🔄 Continuous Integration (CI)

We implemented a robust Continuous Integration pipeline using **GitHub Actions** (`.github/workflows/ci.yml`) because **we needed a strict, automated way to validate code quality and application stability** before any changes are merged. 

On every push or pull request to the `main` branch, the CI pipeline automatically:
1. **Validates Formatting & Syntax:** Runs `eslint` and strict TypeScript checks (`tsc`) to catch early bugs.
2. **Validates Business Logic:** Executes all Vitest unit tests across both the frontend and backend.
3. **Validates Build Integrity:** Compiles the Vite production build to ensure the frontend bundles successfully.
4. **Validates Containerization:** Runs `docker compose build` to ensure the Docker environments are healthy and deployment-ready.

This ensures that our codebase remains consistently deployable and bug-free!
