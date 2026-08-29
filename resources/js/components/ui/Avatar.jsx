import React from 'react';
import { clsx } from 'clsx';

export default function Avatar({ src, name, size = 'md', className = '' }) {
    const sizes = { xs: 'w-6 h-6 text-xs', sm: 'w-8 h-8 text-sm', md: 'w-10 h-10 text-base', lg: 'w-14 h-14 text-xl', xl: 'w-20 h-20 text-2xl' };

    const initials = name
        ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
        : '?';

    if (src) {
        return (
            <img
                src={src}
                alt={name}
                className={clsx('rounded-full object-cover ring-2 ring-slate-700', sizes[size], className)}
            />
        );
    }

    return (
        <div className={clsx(
            'rounded-full flex items-center justify-center font-bold',
            'bg-gradient-to-br from-amber-500 to-orange-600 text-white',
            sizes[size],
            className
        )}>
            {initials}
        </div>
    );
}
