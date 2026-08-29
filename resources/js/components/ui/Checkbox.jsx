import React from 'react';

/**
 * Checkbox - Module ui
 */
export default function Checkbox({ children, ...props }) {
  return (
    <div className="checkbox" {...props}>
      {children}
    </div>
  );
}
