import { useState } from 'react';
import { calculatorApi } from '../services/api';

export type Operator = '+' | '-' | '*' | '/' | '^' | null;

export const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<Operator>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const clear = () => {
    setDisplayValue('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNewValue(false);
    setError(null);
  };

  const inputDigit = (digit: string) => {
    setError(null);
    if (waitingForNewValue) {
      setDisplayValue(digit);
      setWaitingForNewValue(false);
    } else {
      setDisplayValue(displayValue === '0' ? digit : displayValue + digit);
    }
  };

  const inputDot = () => {
    setError(null);
    if (waitingForNewValue) {
      setDisplayValue('0.');
      setWaitingForNewValue(false);
    } else if (displayValue.indexOf('.') === -1) {
      setDisplayValue(displayValue + '.');
    }
  };

  const performOperation = async (nextOperator: Operator) => {
    const inputValue = parseFloat(displayValue);
    
    if (previousValue == null) {
      setPreviousValue(displayValue);
    } else if (operator) {
      const currentValue = previousValue || '0';
      
      setIsLoading(true);
      try {
        let result = null;
        switch (operator) {
          case '+':
            result = await calculatorApi.add(parseFloat(currentValue), inputValue);
            break;
          case '-':
            result = await calculatorApi.subtract(parseFloat(currentValue), inputValue);
            break;
          case '*':
            result = await calculatorApi.multiply(parseFloat(currentValue), inputValue);
            break;
          case '/':
            result = await calculatorApi.divide(parseFloat(currentValue), inputValue);
            break;
          case '^':
            result = await calculatorApi.exponentiate(parseFloat(currentValue), inputValue);
            break;
        }
        if (result) {
          setDisplayValue(String(result.result));
          setPreviousValue(String(result.result));
        }
      } catch (err: any) {
        setError(err.response?.data?.message || 'An error occurred');
        setDisplayValue('Error');
      } finally {
        setIsLoading(false);
      }
    }

    setWaitingForNewValue(true);
    setOperator(nextOperator);
  };

  const calculateResult = async () => {
    if (operator && !waitingForNewValue) {
      await performOperation(null);
      setPreviousValue(null);
      setOperator(null);
    }
  };

  const performUnaryOperation = async (operation: 'sqrt' | 'percentage') => {
    const inputValue = parseFloat(displayValue);
    setIsLoading(true);
    try {
      let result = null;
      if (operation === 'sqrt') {
        result = await calculatorApi.sqrt(inputValue);
      } else if (operation === 'percentage') {
        result = await calculatorApi.percentage(inputValue);
      }
      if (result) {
        setDisplayValue(String(result.result));
        setWaitingForNewValue(true);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
      setDisplayValue('Error');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSign = () => {
    const newValue = parseFloat(displayValue) * -1;
    setDisplayValue(String(newValue));
  };

  return {
    displayValue,
    error,
    isLoading,
    clear,
    inputDigit,
    inputDot,
    performOperation,
    performUnaryOperation,
    calculateResult,
    toggleSign,
    operator,
  };
};
