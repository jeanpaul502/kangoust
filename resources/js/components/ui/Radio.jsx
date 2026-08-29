import React from 'react';

/**
 * Radio - Module ui
 */
export default function Radio({ children, ...props }) {
  return (
    <div className="radio" {...props}>
      {children}
    </div>
  );
}
