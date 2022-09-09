import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import { getProjects, getProjectBySlug } from 'lib/projects';

import Layout from 'components/Layout';
import Section from 'components/Section';
import ProjectContainer from 'components/ProjectContainer';
import ProjectHeader from 'components/ProjectHeader';
import ProjectContent from 'components/ProjectContent';
import LoginRequired from 'components/LoginRequired';
import ProjectSidebar from 'components/ProjectSidebar';
import Checklist from 'components/Checklist';

import styles from 'styles/templates/Project.module.scss';

export default function Project({ source, frontMatter, path }) {
  const projectFrontMatter = {
    ...frontMatter,
    path
  }

  const [checkedItems, setCheckedItems] = useState([]);

  /**
   * onChecklistChange
   */

  async function onChecklistChange(e) {
    let updatedCheckedItems;

    if ( e.target.checked ) {
      updatedCheckedItems = [
        ...checkedItems,
        e.target.value
      ];
    } else {
      updatedCheckedItems = prev.filter(value => value !== e.target.value);
    }

    setCheckedItems(updatedCheckedItems);
  }

  return (
    <Layout frontMatter={projectFrontMatter}>
      <Section className={styles.project}>
        <ProjectContainer>
        <MDXRemote {...source} components={{
          ProjectHeader,
          ProjectContent,
          LoginRequired,
          ProjectSidebar,
          Checklist: (props) => {
            return (
              <Checklist
                {...props}
                checkable={false}
                checkedItems={checkedItems}
                onChange={onChecklistChange}
              />
            );
          },
      }}/>
        </ProjectContainer>
      </Section>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const project = await getProjectBySlug(params.projectSlug);
  const mdxSource = await serialize(project.content, { scope: project.data })
  return {
    props: {
      source: mdxSource,
      frontMatter: project.data,
      path: `/projects/${params.projectSlug}`,
      slug: project.slug
    }
  }
}

export async function getStaticPaths() {
  const projects = await getProjects();
  return {
    paths: projects.map(project => {
      return {
        params: {
          projectSlug: project.slug
        }
      }
    }),
    fallback: false
  }
}