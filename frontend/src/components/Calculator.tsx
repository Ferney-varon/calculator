import React, { useState } from 'react';
import { useCalculator } from '../controllers/useCalculator';
import { Display } from './Display';
import { Keypad } from './Keypad';

export const Calculator: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
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
  } = useCalculator();

  return (
    <div className={`calculator-container ${isExpanded ? 'expanded' : ''}`}>
      <Display value={displayValue} error={error} isLoading={isLoading} />
      <Keypad 
        onDigit={inputDigit}
        onOperator={performOperation}
        onDot={inputDot}
        onClear={clear}
        onEqual={calculateResult}
        onToggleSign={toggleSign}
        onUnaryOperation={performUnaryOperation}
        isExpanded={isExpanded}
        onToggleExpand={() => setIsExpanded(!isExpanded)}
        activeOperator={operator}
      />
    </div>
  );
};
