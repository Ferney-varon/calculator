import { AppError } from '../utils/errors.js';

export class CalculatorService {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static divide(a: number, b: number): number {
    if (b === 0) {
      throw new AppError('Division by zero is not allowed', 400);
    }
    return a / b;
  }

  static exponentiate(a: number, b: number): number {
    return Math.pow(a, b);
  }

  static sqrt(a: number): number {
    if (a < 0) {
      throw new AppError('Square root of negative number is not real', 400);
    }
    return Math.sqrt(a);
  }

  static percentage(a: number, b: number): number {
    return a * (b / 100);
  }
}
