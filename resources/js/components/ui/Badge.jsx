import React from 'react';
import { clsx } from 'clsx';

const variants = {
    default: 'bg-slate-700 text-slate-300',
    primary: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
    success: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
    warning: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    danger: 'bg-red-500/20 text-red-300 border border-red-500/30',
    info: 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30',
    purple: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
};

export default function Badge({ children, variant = 'default', className = '', dot = false }) {
    return (
        <span className={clsx(
            'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium',
            variants[variant],
            className
        )}>
            {dot && <span className={clsx('w-1.5 h-1.5 rounded-full', {
                'bg-amber-400': variant === 'primary',
                'bg-emerald-400': variant === 'success',
                'bg-yellow-400': variant === 'warning',
                'bg-red-400': variant === 'danger',
                'bg-cyan-400': variant === 'info',
                'bg-slate-400': variant === 'default',
            })} />}
            {children}
        </span>
    );
}
