import { promises as fs } from 'fs';
import path from 'path'
import grayMatter from 'gray-matter';

const PROJECTS_DIRECTORY = path.join(process.cwd(), 'src/projects');

/**
 * listProjects
 */

export async function listProjects() {
  const filenames = await fs.readdir(PROJECTS_DIRECTORY);

  if ( !filenames || !Array.isArray(filenames) ) {
    throw new Error('Failed to read project directory');
  }

  return filenames.map(filename => {
    const filePath = path.join(PROJECTS_DIRECTORY, filename)
    const slug = filename.replace('.mdx', '');
    return {
      filename,
      filePath,
      slug
    }
  });
}

export async function getProjectBySlug(slug) {
  const filePath = path.join(PROJECTS_DIRECTORY, `${slug}.mdx`);
  const content = await fs.readFile(filePath, 'utf8');
  const matter = grayMatter(content);
  return {
    slug,
    filePath,
    ...matter
  }
}

/**
 * readProjectsFromDirectory
 */

export async function readProjectsFromDirectory() {
  const filenames = await fs.readdir(PROJECTS_DIRECTORY);

  if ( !filenames || !Array.isArray(filenames) ) {
    throw new Error('Failed to read project directory');
  }

  return await Promise.all(filenames.map(async filename => {
    const filePath = path.join(PROJECTS_DIRECTORY, filename)
    const content = await fs.readFile(filePath, 'utf8')
    const matter = grayMatter(content);

    return {
      filename,
      content,
      matter
    }
  }))
}

/**
 * getProjects
 */

export async function getProjects() {
  const projects = await readProjectsFromDirectory();

  return projects.map(({ filename, content = {}, matter = {} }) => {
    const { data } = matter;
    const id = filename.replace('.mdx', '');
    return {
      file: {
        filename,
        // content
      },
      ...data,
      id,
      path: `/projects/${id}`
    }
  })
}

/**
 * groupProjectsByTopic
 */

export function groupProjectsByTopic(projects, sortOrder) {
  const topics = {};

  projects.forEach(project => {
    if ( !topics[project.topic] ) {
      topics[project.topic] = {
        title: project.topic,
        projects: []
      };
    }
    topics[project.topic].projects.push(project);
  });

  if ( !Array.isArray(sortOrder) ) {
    return Object.keys(topics).map(key => topics[key]);
  }

  return sortOrder.map(key => topics[key]);
}