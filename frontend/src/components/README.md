# Frontend Components Documentation

This directory contains the React components that make up the Presentation Layer of the Calculator app.

## Component Overview

### `Calculator.tsx`
- **Role:** The main orchestrator component.
- **Functionality:** It initializes the `useCalculator` controller hook and passes down state (like `displayValue`, `error`, `isLoading`) to the `Display` component, and callback actions (like `inputDigit`, `performOperation`) to the `Keypad` component.

### `Display.tsx`
- **Role:** Pure presentation component for the calculator screen.
- **Props:** 
  - `value`: The current string to display.
  - `error`: Any error message from the backend.
  - `isLoading`: Boolean to toggle the loading indicator during API calls.
- **Styling:** Handles displaying numbers and conditionally applies error classes.

### `Keypad.tsx`
- **Role:** Pure presentation component containing all interactive buttons.
- **Props:** Callbacks for digits, operators, clear, toggle sign, and equals actions.
- **Functionality:** Dispatches user interactions back up to the `Calculator` component. Dynamically highlights the active operator.
