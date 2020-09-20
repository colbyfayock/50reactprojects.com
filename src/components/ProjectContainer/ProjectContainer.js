import Container from 'components/Container';

import styles from './ProjectContainer.module.scss';

const ProjectContainer = ({ children }) => {
  return (
    <Container className={styles.projectContainer}>
      { children }
    </Container>
  )
}

export default ProjectContainer;