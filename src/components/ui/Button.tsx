import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 btn-hover disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-primary-800 text-white hover:bg-primary-700',
        secondary: 'bg-accent-600 text-white hover:bg-accent-700',
        outline: 'border-2 border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm rounded',
        md: 'px-6 py-3 text-base rounded-md',
        lg: 'px-8 py-4 text-lg rounded-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
