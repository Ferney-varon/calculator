import type { Request, Response, NextFunction } from 'express';
import { CalculatorService } from '../services/calculator.service.js';
import { AppError } from '../utils/errors.js';

const validateInput = (req: Request): { a: number; b: number } => {
  const { a, b } = req.body;
  if (a === undefined || b === undefined) {
    throw new AppError('Both "a" and "b" are required in the request body', 400);
  }
  
  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    throw new AppError('Both "a" and "b" must be valid numbers', 400);
  }

  return { a: numA, b: numB };
};

const validateUnaryInput = (req: Request): { a: number } => {
  const { a } = req.body;
  if (a === undefined) {
    throw new AppError('"a" is required in the request body', 400);
  }
  
  const numA = Number(a);

  if (isNaN(numA)) {
    throw new AppError('"a" must be a valid number', 400);
  }

  return { a: numA };
};

export class CalculatorController {
  static add(req: Request, res: Response, next: NextFunction) {
    try {
      const { a, b } = validateInput(req);
      const result = CalculatorService.add(a, b);
      res.json({ result });
    } catch (error) {
      next(error);
    }
  }

  static subtract(req: Request, res: Response, next: NextFunction) {
    try {
      const { a, b } = validateInput(req);
      const result = CalculatorService.subtract(a, b);
      res.json({ result });
    } catch (error) {
      next(error);
    }
  }

  static multiply(req: Request, res: Response, next: NextFunction) {
    try {
      const { a, b } = validateInput(req);
      const result = CalculatorService.multiply(a, b);
      res.json({ result });
    } catch (error) {
      next(error);
    }
  }

  static divide(req: Request, res: Response, next: NextFunction) {
    try {
      const { a, b } = validateInput(req);
      const result = CalculatorService.divide(a, b);
      res.json({ result });
    } catch (error) {
      next(error);
    }
  }

  static exponentiate(req: Request, res: Response, next: NextFunction) {
    try {
      const { a, b } = validateInput(req);
      const result = CalculatorService.exponentiate(a, b);
      res.json({ result });
    } catch (error) {
      next(error);
    }
  }

  static sqrt(req: Request, res: Response, next: NextFunction) {
    try {
      const { a } = validateUnaryInput(req);
      const result = CalculatorService.sqrt(a);
      res.json({ result });
    } catch (error) {
      next(error);
    }
  }

  static percentage(req: Request, res: Response, next: NextFunction) {
    try {
      const { a } = validateUnaryInput(req);
      const result = CalculatorService.percentage(a);
      res.json({ result });
    } catch (error) {
      next(error);
    }
  }
}
