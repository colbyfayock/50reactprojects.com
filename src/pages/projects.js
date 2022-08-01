import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Link from 'next/link';
import {
  FaBriefcase,
  FaAddressBook,
  FaPuzzlePiece,
  FaProjectDiagram,
  FaFlask,
  FaLeaf,
  FaTools,
  FaRegClone
} from 'react-icons/fa';

import { getProjects, groupProjectsByTopic } from 'lib/projects';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Section from '../components/Section';
import Article from '../components/Article';

import styles from 'styles/pages/Projects.module.scss';

const TITLE = 'Projects';
const DESCRIPTION = 'Use these 50 real-world project ideas to learn by doing including building an ecommerce store and a budget manager.';

const TOPIC_ORDER = [
  'Business & Real-World',
  'Fun & Interesting',
  'Personal & Portfolio',
  'Productivity',
  'Games & Puzzles',
  'Tools & Libraries',
  'Project Add-Ons',
  'Clones'
];

const defaultFilterState = {
  topics: {}
}

export default function Projects({ projects }) {
  const [activeFilters, setActiveFilters] = useState(defaultFilterState);

  const hasActiveFilters = Object.keys(activeFilters.topics).filter(key => activeFilters.topics[key] === true).length > 0;

  const filteredProjects = hasActiveFilters ? projects.filter(({ title: topicTitle }) => {
    const topicState = activeFilters.topics[topicTitle];
    return activeFilters.topics[topicTitle];
  }) : projects;

  const frontMatter = {
    title: TITLE,
    description: DESCRIPTION,
    path: '/projects/'
  }

  function handleOnChecklistChange({ currentTarget }) {
    const isChecked = currentTarget.checked;
    const value = currentTarget.value;

    setActiveFilters(prev => {
      return {
        ...prev,
        topics: {
          ...prev.topics,
          [value]: isChecked
        }
      }
    });
  }

  return (
    <Layout frontMatter={frontMatter}>
      <Helmet>
        <title>{ frontMatter.title }</title>
      </Helmet>

      <Section className={styles.projects}>
        <Container display="flex">
          <h1>Projects to Start Building</h1>

          <Article withSidebar={false}>
            <h2 className="sronly">Project Ideas</h2>
            <ul className={styles.projectsList}>
              {filteredProjects.map(topic => {
                const { projects, title } = topic;
                return (
                  <li key={title}>
                    <h3>{ title }</h3>
                    <ul>
                      {projects.map(project => {
                        const { slug, path, title, description } = project;
                        return (
                          <li key={slug}>
                            <Link href={path}>
                              <a className={styles.project}>
                                <p className={styles.projectTitle}>
                                  <strong>{ title }</strong>
                                </p>
                                <p className={styles.projectDescription}>
                                  { description }
                                </p>
                              </a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </Article>
        </Container>
      </Section>
    </Layout>
  )
}


export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects: groupProjectsByTopic(projects, TOPIC_ORDER)
    },
  }
}