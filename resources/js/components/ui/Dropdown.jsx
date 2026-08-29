import React from 'react';

/**
 * Dropdown - Module ui
 */
export default function Dropdown({ children, ...props }) {
  return (
    <div className="dropdown" {...props}>
      {children}
    </div>
  );
}
