import { cn } from '@/lib/util';

interface ButtonProps extends React.ComponentProps<'button'> {}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={cn('bg-brand-blue-medium text-white py-3 px-4 focus:outline-none focus:ring focus:ring-blue-400 rounded cursor-pointer', className)}
    >
      { children }
    </button>
  )
}

export default Button;