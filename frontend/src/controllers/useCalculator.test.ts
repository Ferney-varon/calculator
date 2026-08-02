import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCalculator } from './useCalculator';
import { calculatorApi } from '../services/api';

// Mock the API service
vi.mock('../services/api', () => ({
  calculatorApi: {
    add: vi.fn().mockResolvedValue({ result: 8 }),
    subtract: vi.fn().mockResolvedValue({ result: 2 }),
    multiply: vi.fn().mockResolvedValue({ result: 15 }),
    divide: vi.fn().mockResolvedValue({ result: 2 }),
  }
}));

describe('useCalculator hook', () => {
  it('should initialize with default state', () => {
    const { result } = renderHook(() => useCalculator());
    expect(result.current.displayValue).toBe('0');
    expect(result.current.error).toBeNull();
  });

  it('should append digits correctly', () => {
    const { result } = renderHook(() => useCalculator());
    
    act(() => {
      result.current.inputDigit('5');
    });
    expect(result.current.displayValue).toBe('5');

    act(() => {
      result.current.inputDigit('3');
    });
    expect(result.current.displayValue).toBe('53');
  });

  it('should handle clear action', () => {
    const { result } = renderHook(() => useCalculator());
    
    act(() => {
      result.current.inputDigit('5');
      result.current.clear();
    });
    
    expect(result.current.displayValue).toBe('0');
  });
});
