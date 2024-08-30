import { getProjects, groupProjectsByTopic } from '@/lib/projects';

import Section from '@/components/Section';
import Container from '@/components/Container';
import Article from '@/components/Article';
import Link from 'next/link';
import { FaAddressBook, FaBriefcase, FaFlask, FaLeaf, FaProjectDiagram, FaPuzzlePiece, FaRegClone, FaTools } from 'react-icons/fa';

const TITLE = 'Projects';
const DESCRIPTION = 'Use these 50 real-world project ideas to learn by doing including building an ecommerce store and a budget manager.';

const TOPICS = [
  {
    title: 'Business & Real-World',
    icon: <FaBriefcase className="text-blue-500 w-5 md:w-6 h-auto -translate-y-[1px]" />
  },
  {
    title: 'Fun & Interesting',
    icon: <FaFlask className="text-blue-500 w-5 md:w-6 h-auto" />
  },
  {
    title: 'Personal & Portfolio',
    icon: <FaAddressBook className="text-blue-500 w-5 md:w-6 h-auto" />
  },
  {
    title: 'Productivity',
    icon: <FaLeaf className="text-blue-500 w-5 md:w-6 h-auto -translate-y-[1px]" />
  },
  {
    title: 'Games & Puzzles',
    icon: <FaPuzzlePiece className="text-blue-500 w-5 md:w-6 h-auto -translate-y-[1px] translate-x-[1px]" />
  },
  {
    title: 'Tools & Libraries',
    icon: <FaTools className="text-blue-500 w-5 md:w-6 h-auto" />
  },
  {
    title: 'Project Add-Ons',
    icon: <FaProjectDiagram className="text-blue-500 w-5 md:w-6 h-auto translate-y-[1px]" />
  },
  {
    title: 'Clones',
    icon: <FaRegClone className="text-blue-500 w-5 md:w-6 h-auto" />
  },
];

export default async function Projects() {
  const projects = await getProjects();
  const projectsBytopic = groupProjectsByTopic(projects, TOPICS);
  return (
    <Section spacing="compact">
      <Container>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-10 md:mb-16">
          Projects to Start Building
        </h1>

        <Article withSidebar={false}>
          <h2 className="sr-only">Project Ideas</h2>
          <ul className="grid gap-16 md:gap-24">
            {projectsBytopic.map(topic => {
              const { projects, title, icon: icon } = topic;
              return (
                <li key={title}>
                  <h3 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10">
                    { icon }
                    { title }
                  </h3>

                  <ul className="grid md:grid-cols-2 gap-8">
                    {projects.map(project => {
                      const { slug, path, title, description } = project;
                      return (
                        <li key={slug} className="rounded shadow px-6 py-4">
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