import { compileMDX, } from 'next-mdx-remote/rsc'

import { getProjectBySlug } from '@/lib/projects';

import Section from '@/components/Section';
import Container from '@/components/Container';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectContent from '@/components/ProjectContent';
import LoginRequired from '@/components/LoginRequired';
import ProjectSidebar from '@/components/ProjectSidebar';
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

export default async function Projects({ params }: { params: { projectSlug: string; }}) {
  const { mdx } = await getProjectBySlug(params.projectSlug);
  const { content } = await compileMDX({
    source: mdx,
    options: { parseFrontmatter: true },
    components: {
      ProjectHeader,
      ProjectContent,
      LoginRequired,
      ProjectSidebar,
      Checklist: (props) => {
        return (
          <Checklist
            {...props}
            // checkable={!!session}
            // checkedItems={checkedItems}
            // onChange={onChecklistChange}
          />
        );
      },
    }
  });

  return (
    <Section className="[&_h2]:px-3 [&_h2]:py-2 [&_h2]:mt-8 [&_h2:first-child]:mt-0 [&_h2]:mb-4 [&_h2]:-mx-3" spacing="compact">
      <Container className="lg:flex lg:flex-wrap">
        { content }
      </Container>
    </Section>
  )
}