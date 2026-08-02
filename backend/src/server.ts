import express from 'express';
import cors from 'cors';
import calculatorRoutes from './routes/calculator.routes.js';
import { errorHandler } from './utils/errors.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/calculator', calculatorRoutes);

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
