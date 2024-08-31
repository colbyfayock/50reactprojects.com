import { compileMDX } from 'next-mdx-remote/rsc';

import { getProjects, groupProjectsByTopic } from '@/lib/projects';

import Section from '@/components/Section';
import Container from '@/components/Container';
import Article from '@/components/Article';
import Link from 'next/link';

export const metadata = {
  title: 'Projects',
  description: 'Use these 50 real-world project ideas to learn by doing including building an ecommerce store and a budget manager.'
}

export default async function Projects() {
  const projectsMdx = await getProjects();
  
  const projects = await Promise.all(projectsMdx.map(async project => {
    const { frontmatter } = await compileMDX({
      source: project.mdx,
      options: { parseFrontmatter: true },
    });
    return {
      ...project,
      ...frontmatter
    }
  }));

  const projectsByTopic = groupProjectsByTopic(projects);

  return (
    <Section spacing="compact">
      <Container>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-10 md:mb-16">
          Projects to Start Building
        </h1>

        <Article withSidebar={false}>
          <h2 className="sr-only">Project Ideas</h2>
          <ul className="grid gap-16 md:gap-24 mb-20">
            {projectsByTopic.map(topic => {
              const { projects, title, icon: icon } = topic;
              return (
                <li key={title}>
                  <h3 className="flex items-center gap-3 md:gap-4 text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10">
                    <span className={`
                      inline-flex justify-center items-center bg-brand-blue-dark rounded-full p-2 md:p-3
                      [&_svg]:text-white
                    `}>
                      { icon }
                    </span>
                    { title }
                  </h3>

                  <ul className="grid md:grid-cols-2 gap-8">
                    {projects.map(project => {
                      const { slug, path, title, description } = project;
                      return (
                        <li 
                          key={slug}
                          className={`
                            rounded border-2 border-brand-gray-light shadow-[0_5px_0_var(--color-brand-gray-light)] px-6 py-4
                            hover:border-brand-blue-medium hover:shadow-[0_5px_0_var(--color-brand-blue-medium)]
                          `}
                        >
                          <Link href={path}>
                            <h4 className="text-2xl mb-2">
                              <strong>{ title }</strong>
                            </h4>
                            <p className="text-xl">
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
  )
}