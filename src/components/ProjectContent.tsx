interface ProjectContentProps extends React.ComponentProps<"div"> {}

const ProjectContent = ({ children, ...props }: ProjectContentProps) => {
  return (
    <div
      {...props}
      className={`
        lg:w-content-with-sidebar lg:pr-20 mb-12
        [&_h2]:text-white [&_h2]:bg-brand-purple
      `}
    >
      { children }
    </div>
  )
}

export default ProjectContent;