import Link from 'next/link';
import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { Projects, Topics } from '@/db/schema';
import { sortArrayOfObjectsByKey } from '@/lib/util';
import { TOPICS_CONFIG } from '@/data/projects';

import Section from '@/components/Section';
import Container from '@/components/Container';
import Article from '@/components/Article';

export const metadata = {
  title: 'Projects',
  description: 'Use these 50 real-world project ideas to learn by doing including building an ecommerce store and a budget manager.'
}

export default async function ProjectsPage() {
  const data = await db.select().from(Projects)
    .innerJoin(Topics, eq(Projects.topicId, Topics.id))
    .limit(50)
    .orderBy(Topics.sortOrder);

  const topics = Array.from(new Set(data.map(({ topics }) => topics.id))).map(topicId => {
    return data.find(({ topics }) => topics.id === topicId)?.topics;
  }).filter(topic => !!topic);

  return (
    <Section spacing="compact">
      <Container>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-10 md:mb-16">
          Projects to Start Building
        </h1>

        <Article withSidebar={false}>
          <h2 className="sr-only">Project Ideas</h2>
          <ul className="grid gap-16 md:gap-24 mb-20">
            {topics.map(topic => {
              const projects = data.filter(({ projects }) => projects.topicId === topic.id).map(({ projects }) => projects);
              const sortedProjects = sortArrayOfObjectsByKey(projects, 'title')
              const { icon } = TOPICS_CONFIG[topic.id];
              return (
                <li key={topic.id}>
                  <h3 className="flex items-center gap-3 md:gap-4 text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10">
                    {icon && (
                      <span className={`
                        inline-flex justify-center items-center bg-brand-blue-dark rounded-full p-2 md:p-3
                        [&_svg]:text-white
                      `}>
                        { icon }
                      </span>
                    )}
                    { topic.title }
                  </h3>

                  {Array.isArray(sortedProjects) && (
                    <ul className="grid md:grid-cols-2 gap-8">
                      {sortedProjects.map(project => {
                        const { slug, title, description } = project;
                        return (
                          <li 
                            key={slug}
                            className={`
                              rounded border-2 border-brand-gray-light shadow-[0_5px_0_var(--color-brand-gray-light)] px-6 py-4
                              hover:border-brand-blue-medium hover:shadow-[0_5px_0_var(--color-brand-blue-medium)]
                            `}
                          >
                            <Link href={`/projects/${slug}`}>
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
                  )}
                </li>
              );
            })}
          </ul>
        </Article>
      </Container>
    </Section>
  )
}