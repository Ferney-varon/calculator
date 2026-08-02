import React from 'react';
import type { Operator } from '../controllers/useCalculator';

interface KeypadProps {
  onDigit: (digit: string) => void;
  onOperator: (operator: Operator) => void;
  onDot: () => void;
  onClear: () => void;
  onEqual: () => void;
  onToggleSign: () => void;
  onUnaryOperation: (op: 'sqrt') => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
  activeOperator: Operator;
}

export const Keypad: React.FC<KeypadProps> = ({
  onDigit,
  onOperator,
  onDot,
  onClear,
  onEqual,
  onToggleSign,
  onUnaryOperation,
  isExpanded,
  onToggleExpand,
  activeOperator,
}) => {
  return (
    <div className="calculator-keypad">
      <div className="keypad-row">
        <button className="btn btn-action" onClick={onClear}>AC</button>
        <button className="btn btn-action" onClick={onToggleSign}>+/-</button>
        <button className="btn btn-action" onClick={onToggleExpand}>
          {isExpanded ? 'Less' : 'More'}
        </button>
        <button 
          className={`btn btn-operator ${activeOperator === '/' ? 'active' : ''}`}
          onClick={() => onOperator('/')}
        >÷</button>
        {isExpanded && <button className="btn btn-operator advanced-col" onClick={() => onOperator('^')}>xʸ</button>}
      </div>
      <div className="keypad-row">
        <button className="btn" onClick={() => onDigit('7')}>7</button>
        <button className="btn" onClick={() => onDigit('8')}>8</button>
        <button className="btn" onClick={() => onDigit('9')}>9</button>
        <button 
          className={`btn btn-operator ${activeOperator === '*' ? 'active' : ''}`}
          onClick={() => onOperator('*')}
        >×</button>
        {isExpanded && <button className="btn btn-operator advanced-col" onClick={() => onUnaryOperation('sqrt')}>√</button>}
      </div>
      <div className="keypad-row">
        <button className="btn" onClick={() => onDigit('4')}>4</button>
        <button className="btn" onClick={() => onDigit('5')}>5</button>
        <button className="btn" onClick={() => onDigit('6')}>6</button>
        <button 
          className={`btn btn-operator ${activeOperator === '-' ? 'active' : ''}`}
          onClick={() => onOperator('-')}
        >−</button>
        {isExpanded && (
          <button 
            className={`btn btn-operator advanced-col ${activeOperator === '%' ? 'active' : ''}`}
            onClick={() => onOperator('%')}
            title="Calculate percentage (e.g. 200 % 15 = 30)"
          >%</button>
        )}
      </div>
      <div className="keypad-row">
        <button className="btn" onClick={() => onDigit('1')}>1</button>
        <button className="btn" onClick={() => onDigit('2')}>2</button>
        <button className="btn" onClick={() => onDigit('3')}>3</button>
        <button 
          className={`btn btn-operator ${activeOperator === '+' ? 'active' : ''}`}
          onClick={() => onOperator('+')}
        >+</button>
      </div>
      <div className="keypad-row">
        <button className="btn btn-zero" onClick={() => onDigit('0')}>0</button>
        <button className="btn" onClick={onDot}>.</button>
        <button className="btn btn-operator" onClick={onEqual}>=</button>
      </div>
    </div>
  );
};
