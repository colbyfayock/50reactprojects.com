import { compileMDX, } from 'next-mdx-remote/rsc'
import { auth } from '@clerk/nextjs/server';
import { eq, and } from 'drizzle-orm';

import { getProjectBySlug } from '@/lib/projects';
import { db } from '@/db';
import { Projects, ProjectTools, Tasks, Tools } from '@/db/schema';

import Section from '@/components/Section';
import Container from '@/components/Container';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectContent from '@/components/ProjectContent';
import LoginRequired from '@/components/LoginRequired';
import ProjectSidebar from '@/components/ProjectSidebar';
import ProjectChecklist from '@/components/ProjectChecklist';
import Checklist from '@/components/Checklist';


export async function generateMetadata({ params }: { params: { projectSlug: string; }}) {
  const { mdx } = await getProjectBySlug(params.projectSlug);
  const { frontmatter: { title, description } } = await compileMDX({
    source: mdx,
    options: { parseFrontmatter: true },
  });
  return {
    title,
    description,
  }
}

export default async function ProjectPage({ params }: { params: { projectSlug: string; }}) {
  const { userId } = auth();

  // @TODO refactor into single query if possible?
  // @TODO if not, move to <suspense> for sidebar content at least

  const [project] = await db.select().from(Projects)
    .where(eq(Projects.slug, params.projectSlug))
    .limit(1);

  const tasks = await db.select().from(Tasks)
    .where(eq(Tasks.projectId, project.id));
    
  const checklist = tasks.map(({ title, id }) => {
    return {
      label: title,
      value: id
    }
  });

  const tools = await db.select({
      id: Tools.id,
      title: Tools.title,
      url: Tools.url,
    })
    .from(ProjectTools)
    .innerJoin(Projects, eq(ProjectTools.projectId, Projects.id))
    .innerJoin(Tools, eq(ProjectTools.toolId, Tools.id))
    .where(eq(Projects.id, project.id));
    

  const { mdx } = await getProjectBySlug(params.projectSlug);
  const { content } = await compileMDX({
    source: mdx,
    options: { parseFrontmatter: true },
    components: {
      ProjectHeader,
      ProjectContent,
      LoginRequired,
      ProjectSidebar,
      Checklist: (props) => <ProjectChecklist {...props} initialCheckable={!!userId} />
    }
  });

  return (
    <Section
      className="[&_h2]:font-semibold [&_h2]:text-lg [&_h2]:px-3 [&_h2]:py-2 [&_h2]:mt-10 [&_h2:first-child]:mt-0 [&_h2]:mb-4"
      spacing="compact"
    >
      <Container className="lg:flex lg:flex-wrap">
        { content }
        <ProjectSidebar>

          <h2 className="text-white bg-brand-b  lue-medium">
            To Do
          </h2>

          <Checklist className="md:text-lg list-none px-2" items={checklist} />

          <h2 className="text-white bg-brand-blue-medium">
            Toolbox
          </h2>

          {Array.isArray(tools) && (
            <ul className="md:text-lg list-none px-2">
              {tools.map(tool => {
                return (
                  <li key={tool.id}>
                    {tool.url && (
                      <a className="underline underline-offset-2 hover:text-blue-500" href={tool.url} rel="noreferrer noopener">
                        { tool.title }
                      </a>
                    )}
                    {!tool.url && tool.title}
                  </li>
                )
              })}
            </ul>
          )}

          <h2 className="text-white bg-brand-blue-medium">
            Resources
          </h2>

          {/* - [bit.ly/2ZZIlij](https://bit.ly/2ZZIlij) */}

          </ProjectSidebar>
      </Container>
    </Section>
  )
}