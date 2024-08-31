import { promises as fs } from 'fs';
import path from 'path'
import { ReactNode } from 'react';
import { PROJECT_TOPICS } from '@/data/projects';

const PROJECTS_DIRECTORY = path.join(process.cwd(), 'src/projects');

interface Project {
  slug: string;
  path: string;
  mdx: string;
  title?: string;
  layout?: string;
  topic?: string;
  description?: string;
}

interface Topic {
  title: string;
  icon: ReactNode;
  projects: Array<Project>;
}

/**
 * getProjects
 */

export async function getProjects(): Promise<Array<Project>> {
  const filenames = await fs.readdir(PROJECTS_DIRECTORY);
  return Promise.all(filenames.map(async filename => {
    const slug = filename.replace('.mdx', '');
    return getProjectBySlug(slug);
  }));
}

/**
 * getProjectBySlug
 */

export async function getProjectBySlug(slug: string): Promise<Project> {
  const mdx = await fs.readFile(path.join(PROJECTS_DIRECTORY, `${slug}.mdx`), 'utf8');;
  return {
    slug,
    path: `/projects/${slug}`,
    mdx,
  }
}

/**
 * groupProjectsByTopic
 */

export function groupProjectsByTopic(projects: Array<Project>) {
  const topics: { [key: string]: Topic } = {};

  projects.forEach(project => {
    const projectTopic = project.topic || 'Unkonwn';

    if ( !topics[projectTopic] ) {
      const topic = PROJECT_TOPICS.find(({ title }) => title === projectTopic);

      topics[projectTopic] = {
        title: projectTopic,
        icon: null,
        projects: [],
        ...topic,
      };
    }

    topics[projectTopic].projects.push(project);
  });

  return PROJECT_TOPICS.map(({ title: key }) => topics[key]);
}
