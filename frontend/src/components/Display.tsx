import React from 'react';


interface DisplayProps {
  value: string;
  error: string | null;
  isLoading: boolean;
}

export const Display: React.FC<DisplayProps> = ({ value, error, isLoading }) => {
  return (
    <div className="calculator-display">
      {isLoading && <div className="loading-indicator">...</div>}
      <div className={`display-value ${error ? 'error' : ''}`}>
        {error ? error : value}
      </div>
    </div>
  );
};
