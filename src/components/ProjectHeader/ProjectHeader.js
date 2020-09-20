import styles from './ProjectHeader.module.scss';

const ProjectHeader = ({ children }) => {
  return (
    <div className={styles.projectHeader}>
      { children }
    </div>
  )
}

export default ProjectHeader;