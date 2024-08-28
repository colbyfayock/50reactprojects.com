interface HeroProps extends React.ComponentProps<"div"> {}

const Hero = ({ children }: HeroProps) => {
  return (
    <div className="text-white bg-brand-blue-dark pb-6 last:pb-0 [&_h1]:text-[clamp(1em,_5vw,_3.5em)] [&_h1]:m-0 [&_a]:no-underline">
      { children }
    </div>
  )
}

export default Hero;