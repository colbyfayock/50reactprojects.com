import { serialize } from 'next-mdx-remote/serialize';

import { getProjectBySlug } from '@/lib/projects';

import Section from '@/components/Section';
import Container from '@/components/Container';
import MDXRemote from '@/components/MDXRemote';

export const metadata = {
  title: 'Projects - 50 Projects for React & the Static Web',
  description: 'Use these 50 real-world project ideas to learn by doing including building an ecommerce store and a budget manager.'
}

export default async function Projects({ params }: { params: { projectSlug: string; }}) {
  const project = await getProjectBySlug(params.projectSlug);
  const mdxSource = await serialize(project.content, { scope: project.data })

  return (
    <Section className="[&_h2]:px-3 [&_h2]:py-2 [&_h2]:mt-8 [&_h2:first-child]:mt-0 [&_h2]:mb-4 [&_h2]:-mx-3" spacing="compact">
      <Container className="lg:flex lg:flex-wrap">
        <MDXRemote {...mdxSource} />
      </Container>
    </Section>
  )
}