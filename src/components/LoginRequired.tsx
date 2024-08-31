import { cn } from "@/lib/util";

interface LoginRequiredProps extends React.ComponentPropsWithoutRef<'div'> {}

const LoginRequired = ({ children, className, ...props }: LoginRequiredProps) => {
  const isAuthorized = false; // !!session?.user;

  if ( !isAuthorized ) {
    return (
      <div className={cn( 'text-white font-semibold text-center bg-brand-blue-dark border-brand-purple mx-0 p-5', className )} {...props}>
        <p>
          More levels including the ability to save your progress coming soon!
        </p>
      </div>
    );
  }

  return <>{ children }</>
}

export default LoginRequired;