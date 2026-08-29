import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { clsx } from 'clsx';

export default function Modal({ open, onClose, title, children, size = 'md', className = '' }) {
    const sizes = { sm: 'max-w-sm', md: 'max-w-md', lg: 'max-w-lg', xl: 'max-w-2xl', full: 'max-w-4xl' };

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />
            {/* Panel */}
            <div className={clsx(
                'relative w-full bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl',
                'animate-in fade-in-0 zoom-in-95 duration-200',
                sizes[size],
                className
            )}>
                {title && (
                    <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                        <h2 className="text-lg font-semibold text-white">{title}</h2>
                        <button
                            onClick={onClose}
                            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>
                )}
                <div className="px-6 py-5">{children}</div>
            </div>
        </div>
    );
}
