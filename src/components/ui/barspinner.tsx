// 'use client';

// import { cn } from '@/lib/utils';

// interface BarsSpinnerProps {
//     className?: string;
//     size?: 'sm' | 'md' | 'lg';
// }

// export function BarsSpinner({ className, size = 'md' }: BarsSpinnerProps) {
//     const sizeClasses = {
//         sm: 'h-4 w-1',
//         md: 'h-8 w-2',
//         lg: 'h-12 w-2'
//     };

//     return (
//         <div className={cn('flex items-center justify-center space-x-1', className)}>
//             {[0, 1, 2, 3, 4].map((i) => (
//                 <div
//                     key={i}
//                     className={cn(
//                         'animate-bars',
//                         sizeClasses[size],
//                         'bg-primary',
//                         'rounded-sm'
//                     )}
//                     style={{
//                         animationDelay: `${i * 0.1}s`,
//                     }}
//                 />
//             ))}
//         </div>
//     );
// }

'use client';

import { cn } from '@/lib/utils';

interface BarsSpinnerProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export function BarsSpinner({ className, size = 'md' }: BarsSpinnerProps) {
    const sizeClasses = {
        sm: 'h-4 w-1',
        md: 'h-8 w-2',
        lg: 'h-12 w-3'
    };

    return (
        <div className={cn('flex items-center justify-center space-x-1', className)}>
            {[0, 1, 2, 3, 4].map((i) => (
                <div
                    key={i}
                    className={cn(
                        'animate-bars-color-alternate rounded-sm',
                        sizeClasses[size]
                    )}
                    style={{
                        animationDelay: `${i * 0.1}s`,
                    }}
                />
            ))}
        </div>
    );
}