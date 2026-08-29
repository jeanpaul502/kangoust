import React from 'react';

/**
 * Tooltip - Module ui
 */
export default function Tooltip({ children, ...props }) {
  return (
    <div className="tooltip" {...props}>
      {children}
    </div>
  );
}
