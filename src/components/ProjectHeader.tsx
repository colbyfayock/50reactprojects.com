interface ProjectHeaderProps extends React.ComponentProps<'div'> {}

const ProjectHeader = ({ children, ...rest }: ProjectHeaderProps) => {
  return (
    <div
      className={`
        w-full lg:w-content-with-sidebar mb-12
        [&_h1]:text-4xl sm:[&_h1]:text-5xl md:[&_h1]:text-6xl [&_h1]:font-bold [&_h1]:m-0 [&_h1]:mb-4
        [&_p]:text-2xl [&_p]:line-height-1.3
      `}
      {...rest}
    >
      { children }
    </div>
  )
}

export default ProjectHeader;