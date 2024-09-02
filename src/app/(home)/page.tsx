import {
  FaBriefcase,
  FaAddressBook,
  FaPuzzlePiece,
  FaProjectDiagram,
  FaFlask,
  FaLeaf,
  FaTools,
  FaRegClone
} from 'react-icons/fa';
import { sql } from 'drizzle-orm'
import { db } from '@/db';

import LogoHorizontal from '@/components/LogoHorizontal';
import Container from '@/components/Container';
import Section from '@/components/Section';
import FormEbook from '@/components/FormEbook';
import MotionImage from '@/components/MotionImage';

const motionPreviewImages = {
  whileHover: {
    scale: 1.2,
    zIndex: 20
  }
}

export default async function Home() {
  const result = await db.execute(sql`SELECT current_database()`);
  console.log('result', result.rows);
  return (
    <>
      <Section className="py-12 sm:py-24 md:py-32" backgroundColor="blue-dark">
        <Container className="text-white bg-brand-blue-dark">
          <h1 className="flex items-center justify-center -mt-4 mb-6">
            <LogoHorizontal className="w-full max-w-[50rem] h-auto -ml-4 sm:-ml-6 md:-ml-10" />
            <span className="sr-only">50 Projects for React &amp; the Static Web</span>
          </h1>

          <p className="text-4xl text-center mb-6">
            <strong className="block sm:inline">Learn by doing</strong> with
            this <span className="block sm:inline"><strong className="text-brand-purple-light">FREE</strong> <strong>ebook</strong>!</span>
          </p>

          <FormEbook id="hero" inputClassName="border-white">
            <p className="text-center">
              Get the ebook straight to your inbox.
            </p>
          </FormEbook>
        </Container>
      </Section>

      <Section className="overflow-hidden">
        <Container>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center -mt-6 mb-6 sm:mb-12">Not sure what to build?</h2>

          <p className="text-center text-2xl sm:text-3xl md:text-4xl mb-12 sm:mb-20">
            Dive in with <strong>50 projects</strong> complete
            with <strong className="text-brand-blue-medium">project briefs</strong> and <strong className="text-brand-purple">wireframes</strong>!
          </p>

          <div className="relative w-full max-w-3xl h-36 sm:h-64 md:h-80 mx-auto my-0">
            <MotionImage
              className="absolute top-6 sm:top-8 md:top-10 left-0 z-0 w-56 sm:w-80 md:w-96 h-auto rounded border border-zinc-100 shadow-[0_10px_14px_rgba(0,0,0,0.2)] hover:shadow-[0_50px_50px_rgba(0,0,0,0.2)] transition-shadow m-auto"
              width="612"
              height="792"
              src="/images/50-react-projects-business-real-world-ecommerce-store.jpg"
              alt="Example Ecommerce Store Project Brief"
              {...motionPreviewImages}
            />
            <MotionImage
              className="absolute top-0 z-10 w-56 sm:w-80 md:w-96 h-auto rounded shadow-[0_10px_14px_rgba(0,0,0,0.2)] hover:shadow-[0_50px_50px_rgba(0,0,0,0.2)] transition-shadow m-auto inset-x-0"
              width="612"
              height="792"
              src="/images/50-react-projects-cover-business-real-world.jpg"
              alt="Example Business and Real-world Cover"
              {...motionPreviewImages}
            />
            <MotionImage
              className="absolute top-6 sm:top-8 md:top-10 right-0 z-0 w-56 sm:w-80 md:w-96 h-auto rounded border border-zinc-100 shadow-[0_10px_14px_rgba(0,0,0,0.2)] hover:shadow-[0_50px_50px_rgba(0,0,0,0.2)] transition-shadow m-auto"
              width="612"
              height="792"
              src="/images/50-react-projects-ecommerce-store-layout.jpg"
              alt="Example Ecommerce Store Design Layout"
              {...motionPreviewImages}
            />
          </div>

        </Container>
      </Section>

      <Section backgroundColor="blue">
        <Container>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 sm:mb-12">
            Learn by Doing
          </h2>

          <p className="text-center text-xl sm:text-2xl md:text-4xl text-blue-50 mb-12 sm:mb-16 leading-relaxed">
            One of the best ways to learn is by <strong className="text-white">doing the work</strong>. Choose
            from <strong className="text-white">8 project categories</strong> and get started right away.
          </p>

          <div className="flex sm:justify-center max-w-2xl mx-auto mb-12 sm:mb-20">
            <ul className="grid sm:grid-cols-2 gap-8 gap-y-12 md:gap-y-6 list-none p-0 mx-auto">
              <li className="flex items-center justify-center md:justify-start flex-col md:flex-row gap-4 font-semibold text-2xl">
                <span className="inline-flex justify-center items-center bg-brand-blue-dark rounded-full p-5 md:p-3">
                  <FaBriefcase className="w-8 md:w-6 h-auto -translate-y-[1px]" />
                </span>
                Business &amp; Real-World
              </li>
              <li className="flex items-center justify-center md:justify-start flex-col md:flex-row gap-4 font-semibold text-2xl">
                <span className="inline-flex justify-center items-center bg-brand-blue-dark rounded-full p-5 md:p-3">
                  <FaAddressBook className="w-8 md:w-6 h-auto" />
                </span>
                Personal &amp; Portfolio
              </li>
              <li className="flex items-center justify-center md:justify-start flex-col md:flex-row gap-4 font-semibold text-2xl">
                <span className="inline-flex justify-center items-center bg-brand-blue-dark rounded-full p-5 md:p-3">
                  <FaPuzzlePiece className="w-8 md:w-6 h-auto -translate-y-[1px] translate-x-[1px]" />
                </span>
                Games &amp; Puzzles
              </li>
              <li className="flex items-center justify-center md:justify-start flex-col md:flex-row gap-4 font-semibold text-2xl">
                <span className="inline-flex justify-center items-center bg-brand-blue-dark rounded-full p-5 md:p-3">
                  <FaProjectDiagram className="w-8 md:w-6 h-auto translate-y-[1px]" />
                </span>
                Project Add-Ons
              </li>
              <li className="flex items-center justify-center md:justify-start flex-col md:flex-row gap-4 font-semibold text-2xl">
                <span className="inline-flex justify-center items-center bg-brand-blue-dark rounded-full p-5 md:p-3">
                  <FaFlask className="w-8 md:w-6 h-auto" />
                </span>
                Fun &amp; Interesting
              </li>
              <li className="flex items-center justify-center md:justify-start flex-col md:flex-row gap-4 font-semibold text-2xl">
                <span className="inline-flex justify-center items-center bg-brand-blue-dark rounded-full p-5 md:p-3">
                  <FaLeaf className="w-8 md:w-6 h-auto -translate-y-[1px]" />
                </span>
                Productivity
              </li>
              <li className="flex items-center justify-center md:justify-start flex-col md:flex-row gap-4 font-semibold text-2xl">
                <span className="inline-flex justify-center items-center bg-brand-blue-dark rounded-full p-5 md:p-3">
                  <FaTools className="w-8 md:w-6 h-auto" />
                </span>
                Tools &amp; Libraries
              </li>
              <li className="flex items-center justify-center md:justify-start flex-col md:flex-row gap-4 font-semibold text-2xl">
                <span className="inline-flex justify-center items-center bg-brand-blue-dark rounded-full p-5 md:p-3">
                  <FaRegClone className="w-8 md:w-6 h-auto" />
                </span>
                Clones
              </li>
            </ul>
          </div>

          <p className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">
            Keep building and <strong>level up</strong>!
          </p>
        </Container>
      </Section>
    </>
  )
}
