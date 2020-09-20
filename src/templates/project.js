import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Section from '../components/Section';
import ProjectContainer from '../components/ProjectContainer';

import styles from 'styles/templates/Project.module.scss';

export default function TemplateProject({ children, frontMatter }) {
  const projectFrontMatter = {
    ...frontMatter,
    path: createPathFromResource(frontMatter)
  }

  return (
    <Layout frontMatter={projectFrontMatter}>
      <Section className={styles.project}>
        <ProjectContainer>
          {children}
        </ProjectContainer>
      </Section>
    </Layout>
  )
}

function createPathFromResource(frontMatter) {
  return `/${frontMatter.__resourcePath}/`.replace('.mdx', '');
}