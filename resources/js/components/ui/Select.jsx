import React from 'react';

/**
 * Select - Module ui
 */
export default function Select({ children, ...props }) {
  return (
    <div className="select" {...props}>
      {children}
    </div>
  );
}
