import React from 'react';

/**
 * Tabs - Module ui
 */
export default function Tabs({ children, ...props }) {
  return (
    <div className="tabs" {...props}>
      {children}
    </div>
  );
}
