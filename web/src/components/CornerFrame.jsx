import React from 'react';
import { cn } from '@/lib/utils';

export default function CornerFrame({ children, className }) {
    const mark = 'pointer-events-none absolute h-4 w-4 border-ink/60';
    return (
        <div className={cn('relative', className)}>
            <span aria-hidden="true" className={cn(mark, '-left-2 -top-2 border-l-2 border-t-2')} />
            <span aria-hidden="true" className={cn(mark, '-right-2 -top-2 border-r-2 border-t-2')} />
            <span aria-hidden="true" className={cn(mark, '-bottom-2 -left-2 border-b-2 border-l-2')} />
            <span aria-hidden="true" className={cn(mark, '-bottom-2 -right-2 border-b-2 border-r-2')} />
            {children}
        </div>
    );
}
