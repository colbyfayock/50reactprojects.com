import styles from './ProjectSidebar.module.scss';

const ProjectSidebar = ({ children }) => {
  return (
    <div className={styles.projectSidebar}>
      { children }
    </div>
  )
}

export default ProjectSidebar;