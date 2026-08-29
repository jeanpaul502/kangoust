import React, { forwardRef } from 'react';
import { clsx } from 'clsx';

const Input = forwardRef(function Input({
    label,
    error,
    hint,
    className = '',
    containerClassName = '',
    icon: Icon,
    ...props
}, ref) {
    return (
        <div className={clsx('space-y-1', containerClassName)}>
            {label && (
                <label className="block text-sm font-medium text-slate-300">
                    {label}
                </label>
            )}
            <div className="relative">
                {Icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        <Icon size={16} />
                    </div>
                )}
                <input
                    ref={ref}
                    className={clsx(
                        'w-full bg-slate-800/60 border rounded-xl text-slate-200 placeholder-slate-500',
                        'focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50',
                        'transition-all duration-200 text-sm',
                        Icon ? 'pl-10 pr-4 py-2.5' : 'px-4 py-2.5',
                        error ? 'border-red-500/60' : 'border-slate-700/60',
                        className
                    )}
                    {...props}
                />
            </div>
            {error && <p className="text-xs text-red-400">{error}</p>}
            {hint && !error && <p className="text-xs text-slate-500">{hint}</p>}
        </div>
    );
});

export default Input;
