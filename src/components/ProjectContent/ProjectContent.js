import styles from './ProjectContent.module.scss';

const ProjectContent = ({ children }) => {
  return (
    <div className={styles.projectContent}>
      { children }
    </div>
  )
}

export default ProjectContent;