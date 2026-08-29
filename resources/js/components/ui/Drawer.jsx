import React from 'react';

/**
 * Drawer - Module ui
 */
export default function Drawer({ children, ...props }) {
  return (
    <div className="drawer" {...props}>
      {children}
    </div>
  );
}
