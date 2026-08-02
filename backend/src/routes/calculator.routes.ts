import { Router } from 'express';
import { CalculatorController } from '../controllers/calculator.controller.js';

const router = Router();

router.post('/add', CalculatorController.add);
router.post('/subtract', CalculatorController.subtract);
router.post('/multiply', CalculatorController.multiply);
router.post('/divide', CalculatorController.divide);
router.post('/exponentiate', CalculatorController.exponentiate);
router.post('/sqrt', CalculatorController.sqrt);
router.post('/percentage', CalculatorController.percentage);

export default router;
