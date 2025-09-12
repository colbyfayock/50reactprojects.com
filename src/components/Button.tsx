import { cn } from '@/lib/util';

interface ButtonProps extends React.ComponentProps<'button'> {
  isLoading?: boolean;
}

export const buttonStyles = 'font-bold text-xl uppercase text-white bg-brand-blue-medium px-4 py-3 border-[3px] border-brand-blue-medium focus:border-blue-400 focus:outline-none rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

const Button = ({ children, className, isLoading, disabled, ...rest }: ButtonProps) => {
  
  return (
    <button
      {...rest}
      disabled={disabled || isLoading}
      className={cn(buttonStyles, 'relative', className)}
    >
      <span className={isLoading ? 'invisible' : 'visible'}>
        {children}
      </span>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </button>
  )
}

export default Button;