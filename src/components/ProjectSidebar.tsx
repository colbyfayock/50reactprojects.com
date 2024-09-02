interface ProjectSidebarProps extends React.ComponentProps<"div"> {}

const ProjectSidebar = ({ children, ...props }: ProjectSidebarProps) => {
  return (
    <div
      {...props}
      className={`
        w-full lg:w-sidebar lg:flex-shrink-0
        [&_h2]:text-white [&_h2]:bg-brand-blue-medium
      `}
    >
      { children }
    </div>
  )
}

export default ProjectSidebar;