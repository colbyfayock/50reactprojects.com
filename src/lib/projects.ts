import { promises as fs } from 'fs';
import path from 'path'

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
