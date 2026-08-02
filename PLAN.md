# Full Stack Calculator Application Implementation Plan (Multi-Agent Setup)

This document serves as the primary hand-over context for the subagents executing the full-stack calculator application in parallel.

## Project Context
We are building a full-stack calculator application with a React (Vite) frontend and a Node.js (Express) backend. Both apps are initialized with TypeScript.
- **Frontend Path:** `calculator/frontend`
- **Backend Path:** `calculator/backend`

## Business Idea & High-Level Architecture
The application performs basic arithmetic operations (Addition, Subtraction, Multiplication, Division).
- **Backend (Agent A):** Exposes individual RESTful endpoints per operation. Validates input and returns JSON.
- **Frontend (Agent B):** An intuitive React UI. Implements an MVC pattern with a `useCalculator` hook connecting views to the API service. Premium vanilla CSS design.

## Continuous Integration (CI) - *NEW*
To ensure the application remains stable and buildable:
- Add a GitHub Actions Workflow (`.github/workflows/ci.yml`).
- **Jobs:**
  - `lint-and-test`: Runs `npm install`, `npm run lint` (if available), and `npm run test` (via Vitest) on both frontend and backend.
  - `build`: Validates the TypeScript and Vite build phase for the frontend.
  - `docker-build`: Tests the Dockerfiles by running `docker compose build` to verify the containerization works without issues.

## UI Refinements & Advanced Layout (Pending)
- [ ] Fix display overflow on long numbers (truncate with ellipsis and scale down text).
- [ ] Redesign advanced operations layout to expand horizontally (new column on the right).
- [ ] Ensure new advanced operations (`^`, `√`, `%`) use the yellow `btn-operator` style.
- [ ] Implement smooth responsive resizing for the container width.

## Checklist for Validation

### Functional Requirements
- [x] Backend: Express server starts and connects to routes.
- [x] Backend: `POST /api/calculator/add` works and validates input.
- [x] Backend: `POST /api/calculator/subtract` works and validates input.
- [x] Backend: `POST /api/calculator/multiply` works and validates input.
- [x] Backend: `POST /api/calculator/divide` works, validates input, and handles division by zero.
- [x] Frontend: UI is responsive and intuitively designed (WOW factor).
- [x] Frontend: Display component correctly shows user input.
- [x] Frontend: MVC architecture implemented (`useCalculator` hook).
- [x] Integration: Frontend successfully calls backend API and displays the JSON result.
- [x] Integration: Frontend gracefully handles and displays backend errors.

### Non-Functional Requirements
- [x] Testing: Unit tests added for backend services and controllers.
- [x] Testing: Unit tests added for frontend components and hooks.
- [x] Documentation: Low-level frontend component documentation.
- [x] Documentation: Low-level backend API usage documentation.
- [x] DevOps: `Dockerfile` created for the backend.
- [x] DevOps: `Dockerfile` created for the frontend.

### CI/CD Requirements (Pending Execution)
- [ ] CI: Create `.github/workflows/ci.yml`.
- [ ] CI: Configure Node environment and dependency caching.
- [ ] CI: Add steps for backend tests and frontend tests/build.
- [ ] CI: Add step to execute `docker compose build`.
