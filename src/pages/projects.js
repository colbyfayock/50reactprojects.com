import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { getProjects, groupProjectsByTopic } from '@/lib/projects';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Section from '../components/Section';
import Article from '../components/Article';

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

  const filteredProjects = hasActiveFilters ? projects.filter(({ title: topicTitle }) => activeFilters.topics[topicTitle]) : projects;

  const frontMatter = {
    title: TITLE,
    description: DESCRIPTION,
    path: '/projects/'
  }

  return (
    <Layout frontMatter={frontMatter}>
      <Head>
        <title key="title">Projects - 50 React Projects</title>
      </Head>

      <Section>
        <Container>
          <h1 className="text-5xl">Projects to Start Building</h1>

          <Article withSidebar={false}>
            <h2 className="sr-only">Project Ideas</h2>
            <ul>
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
                              <p>
                                <strong>{ title }</strong>
                              </p>
                              <p>
                                { description }
                              </p>
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

  projects.forEach(project => delete project.file);

  return {
    props: {
      projects: groupProjectsByTopic(projects, TOPIC_ORDER)
    },
  }
}