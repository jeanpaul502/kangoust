import React from 'react';
import { clsx } from 'clsx';

export default function Skeleton({ className = '', lines = 1, circle = false }) {
    if (circle) {
        return <div className={clsx('rounded-full animate-pulse bg-slate-800', className)} />;
    }
    if (lines > 1) {
        return (
            <div className="space-y-2">
                {Array.from({ length: lines }).map((_, i) => (
                    <div
                        key={i}
                        style={{ width: i === lines - 1 ? '60%' : '100%' }}
                        className={clsx('h-4 rounded animate-pulse bg-slate-800', className)}
                    />
                ))}
            </div>
        );
    }
    return <div className={clsx('h-4 rounded animate-pulse bg-slate-800', className)} />;
}
