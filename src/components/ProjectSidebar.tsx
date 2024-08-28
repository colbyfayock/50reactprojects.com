interface ProjectSidebarProps extends React.ComponentProps<"div"> {}

const ProjectSidebar = ({ children, ...props }: ProjectSidebarProps) => {
  return (
    <div
      {...props}
      className={`
        w-full lg:w-sidebar lg:flex-shrink-0 lg:pr-8
        [&_h2]:text-white [&_h2]:bg-brand-blue-medium
        [&_ul]:list-none [&_ul]:p-0
      `}
    >
      { children }
    </div>
  )
}

export default ProjectSidebar;