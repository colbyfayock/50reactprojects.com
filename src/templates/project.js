import Layout from '../components/Layout';
import Section from '../components/Section';
import ProjectContainer from '../components/ProjectContainer';

import styles from 'styles/templates/Project.module.scss';

const TemplateProject = ({ children, frontMatter }) => {
  return (
    <Layout frontMatter={frontMatter}>
      <Section className={styles.project}>
        <ProjectContainer>
          {children}
        </ProjectContainer>
      </Section>
    </Layout>
  )
}

export default TemplateProject;