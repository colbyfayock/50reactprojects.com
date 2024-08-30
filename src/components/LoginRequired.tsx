interface LoginRequiredProps extends React.ComponentPropsWithoutRef<'p'> {}

const LoginRequired = ({ children, ...props }: LoginRequiredProps) => {
  const isAuthorized = false; // !!session?.user;

  if ( !isAuthorized ) {
    return (
      <p className="text-white font-bold text-center bg-brand-blue-dark border-brand-purple mx-0 my-[2em] p-[1em] rounded-[0.25em] border-2" {...props}>
        More levels including the ability to save your progress coming soon!
      </p>
    );
  }

  return <>{ children }</>
}

export default LoginRequired;