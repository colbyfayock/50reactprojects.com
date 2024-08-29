import { cn } from '@/lib/util';

interface ButtonProps extends React.ComponentProps<'button'> {}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={cn('font-bold text-xl uppercase text-white bg-brand-blue-medium px-4 py-3 border-[3px] border-brand-blue-medium focus:border-blue-400 focus:outline-none rounded cursor-pointer', className)}
    >
      { children }
    </button>
  )
}

export default Button;