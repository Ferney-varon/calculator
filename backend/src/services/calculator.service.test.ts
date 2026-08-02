import { describe, it, expect } from 'vitest';
import { CalculatorService } from './calculator.service.js';
import { AppError } from '../utils/errors.js';

describe('CalculatorService', () => {
  it('should correctly add two numbers', () => {
    expect(CalculatorService.add(5, 3)).toBe(8);
  });

  it('should correctly subtract two numbers', () => {
    expect(CalculatorService.subtract(5, 3)).toBe(2);
  });

  it('should correctly multiply two numbers', () => {
    expect(CalculatorService.multiply(5, 3)).toBe(15);
  });

  it('should correctly divide two numbers', () => {
    expect(CalculatorService.divide(6, 3)).toBe(2);
  });

  it('should throw an AppError when dividing by zero', () => {
    expect(() => CalculatorService.divide(6, 0)).toThrow(AppError);
    expect(() => CalculatorService.divide(6, 0)).toThrow('Division by zero is not allowed');
  });

  it('should correctly exponentiate two numbers', () => {
    expect(CalculatorService.exponentiate(2, 3)).toBe(8);
  });

  it('should correctly calculate square root', () => {
    expect(CalculatorService.sqrt(9)).toBe(3);
  });

  it('should throw an AppError for negative square root', () => {
    expect(() => CalculatorService.sqrt(-9)).toThrow(AppError);
    expect(() => CalculatorService.sqrt(-9)).toThrow('Square root of negative number is not real');
  });

  it('should correctly calculate percentage', () => {
    expect(CalculatorService.percentage(50)).toBe(0.5);
  });
});
