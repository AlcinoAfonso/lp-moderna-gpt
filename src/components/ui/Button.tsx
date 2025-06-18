import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
  } as const;

  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md font-medium transition-colors',
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
