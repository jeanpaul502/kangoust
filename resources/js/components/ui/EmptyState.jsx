import React from 'react';
import { clsx } from 'clsx';

export default function EmptyState({ icon: Icon, title, description, action, className = '' }) {
    return (
        <div className={clsx('flex flex-col items-center justify-center py-16 text-center', className)}>
            {Icon && (
                <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-4">
                    <Icon size={28} className="text-slate-500" />
                </div>
            )}
            {title && <h3 className="text-lg font-semibold text-slate-300 mb-2">{title}</h3>}
            {description && <p className="text-sm text-slate-500 max-w-xs mb-6">{description}</p>}
            {action}
        </div>
    );
}
