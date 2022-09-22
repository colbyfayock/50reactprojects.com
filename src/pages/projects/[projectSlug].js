import { useState, useEffect } from 'react';
import Head from 'next/head';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { useSession } from 'next-auth/react';

import { getProjects, getProjectBySlug } from 'lib/projects';
import { getProgress, createProgress } from 'lib/harperdb';

import Layout from 'components/Layout';
import Section from 'components/Section';
import ProjectContainer from 'components/ProjectContainer';
import ProjectHeader from 'components/ProjectHeader';
import ProjectContent from 'components/ProjectContent';
import LoginRequired from 'components/LoginRequired';
import ProjectSidebar from 'components/ProjectSidebar';
import Checklist from 'components/Checklist';

import styles from 'styles/templates/Project.module.scss';

export default function Project({ source, frontMatter, path, slug }) {
  const { data: session } = useSession();
  const userId = session?.user.id;

  const [checkedItems, setCheckedItems] = useState();
  const [progressId, setProgressId] = useState();

  const projectFrontMatter = {
    ...frontMatter,
    path
  }

  const title = `${ frontMatter.title } - 50 React Projects`;

  useEffect(() => {
    if ( !userId ) return;

    (async function run() {
      const { data: progress } = await fetch(`/api/progress?projectId=${slug}&userId=${userId}`).then(r => r.json())

      if ( progress[0] ) {
        setProgressId(progress[0].id);
        setCheckedItems(progress[0].checkedItems || []);
        return;
      }

      if ( !progress || progress.length === 0 ) {
        const { data: newProgress } = await fetch('/api/progress/create', {
          method: 'POST',
          body: JSON.stringify({
            projectId: slug,
            userId
          })
        }).then(r => r.json())
        setProgressId(newProgress.id);
      }

      setCheckedItems([]);
    })();
  }, [slug, userId]);

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

    const result = await fetch('/api/progress/update', {
      method: 'POST',
      body: JSON.stringify({
        id: progressId,
        projectId: slug,
        userId,
        checkedItems: updatedCheckedItems
      })
    }).then(r => r.json())

    setCheckedItems(updatedCheckedItems);
  }

  return (
    <Layout frontMatter={projectFrontMatter}>
      <Head>
        <title key="title">{ title }</title>
      </Head>
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
                  checkable={!!session}
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