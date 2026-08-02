# Full-Stack Calculator Architecture

## Business Idea
The Calculator Application is designed to provide a seamless, premium user experience for performing fundamental arithmetic operations. The core objective is to deliver a highly responsive UI with a "glassmorphism" aesthetic that communicates in real-time with a robust backend service, ensuring separation of logic and presentation.

## Architectural Layers
The application adopts a classic client-server model to separate concerns, resulting in cleaner code and better maintainability.

### 1. Presentation Layer (Frontend - React & Vite)
This layer handles all user interactions and rendering.
- **View:** Built using reusable React components (`Calculator`, `Display`, `Keypad`) with pure CSS for premium micro-animations and styling.
- **Controller (MVC):** The `useCalculator` hook manages local UI state (current input, previous value, selected operator) and orchestrates API calls, decoupling logic from the view.
- **Service:** The `api.ts` module uses Axios to communicate with the backend via REST.

### 2. Service/API Layer (Backend - Node.js & Express)
This layer acts as the source of truth for business logic and strict validation.
- **Routing:** Express router directing HTTP POST requests to appropriate controllers.
- **Controller:** Validates incoming payloads (ensuring operands are valid numbers) and handles HTTP request/response lifecycles.
- **Service:** Core business logic (`calculator.service.ts`) executes mathematical operations safely, enforcing rules like preventing division by zero.
