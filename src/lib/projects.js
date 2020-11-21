import fs from 'fs';
import path from 'path'
import grayMatter from 'gray-matter';

const PROJECTS_DIRECTORY = path.join(process.cwd(), 'src/pages/projects');

/**
 * readProjectsFromDirectory
 */

export async function readProjectsFromDirectory() {
  const filenames = fs.readdirSync(PROJECTS_DIRECTORY);

  if ( !filenames || !Array.isArray(filenames) ) {
    throw new Error('Failed to read project directory');
  }

  return filenames.map(filename => {
    const filePath = path.join(PROJECTS_DIRECTORY, filename)
    const content = fs.readFileSync(filePath, 'utf8')
    const matter = grayMatter(content);

    return {
      filename,
      content,
      matter
    }
  })
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