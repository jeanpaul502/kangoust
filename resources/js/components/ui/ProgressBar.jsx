import React from 'react';

/**
 * ProgressBar - Module ui
 */
export default function ProgressBar({ children, ...props }) {
  return (
    <div className="progressBar" {...props}>
      {children}
    </div>
  );
}
