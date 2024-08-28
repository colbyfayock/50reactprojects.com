"use client";

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
import { motion } from 'framer-motion';

import LogoHorizontal from '@/components/LogoHorizontal';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Hero from '@/components/Hero';
import FormEbook from '@/components/FormEbook';

const motionPreviewImages = {
  whileHover: {
    scale: 1.2,
    zIndex: 2
  }
}

{/* <Head>
<meta property="og:type" content="book" key="og:type" />
</Head> */}

export default function Home() {
  return (
    <>
      <Section backgroundColor="blue-dark">

        <Hero>
          <h1 className="flex items-center justify-center">
            <LogoHorizontal />
          </h1>

          <p className="text-center text-[clamp(1.5em,4vw,3em)]">
            <strong>Learn by doing</strong> with this <strong className="text-brand-purple-light">FREE</strong> ebook!
          </p>

          <FormEbook id="hero">
            <p>
              Get the <strong>FREE EBOOK</strong> straight to your inbox.
            </p>
          </FormEbook>
        </Hero>

      </Section>

      <Section className="overflow-hidden">
        <Container>

          <h2 className="text-5xl text-center mt-0">Not sure what to build?</h2>

          <p className="text-center text-[clamp(2rem,3.2vw,3rem)] md:text-[3.2vw]">
            Dive in with <strong>50 projects</strong> complete
            with <strong className="text-brand-blue-medium">project briefs</strong> and <strong className="text-brand-purple">wireframes</strong>!
          </p>

          <div className="relative w-[55em] h-[clamp(10em,20vw,18em)] text-[clamp(.33em,1.4vw,1em)] mx-auto my-0">
            <motion.img
              className="absolute z-0 w-[1em] h-[1.294117647em] text-[24em] shadow-[0_8px_12px_rgba(black,0.2)] m-auto left-0 top-[0.1em]"
              width="612"
              height="792"
              src="/images/50-react-projects-business-real-world-ecommerce-store.jpg"
              alt="Example Ecommerce Store Project Brief"
              {...motionPreviewImages}
            />
            <motion.img
              className="absolute z-0 w-[1em] h-[1.294117647em] text-[24em] shadow-[0_8px_12px_rgba(black,0.2)] m-auto z-[1] top-0 inset-x-0"
              width="612"
              height="792"
              src="/images/50-react-projects-cover-business-real-world.jpg"
              alt="Example Business and Real-world Cover"
              {...motionPreviewImages}
            />
            <motion.img
              className="absolute z-0 w-[1em] h-[1.294117647em] text-[24em] shadow-[0_8px_12px_rgba(black,0.2)] m-auto right-0 top-[0.1em]"
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

          <h2 className="text-5xl text-center mt-0">Learn by Doing</h2>

          <p className="text-center text-2xl">
            One of the best ways to learn is by <strong>doing the work</strong>. Choose
            from <strong>8 project categories</strong> and get started right away.
          </p>

          <div className="text-[clamp(.8em,1.5vw,1em)] max-w-[38em] mx-auto my-[3em]">
            <ul className="grid grid-cols-[1fr] md:grid-cols-[12em_12em] gap-[0.4em_2em] text-left m-0 p-0">
              <li className="flex flex-1 items-center font-bold leading-[1.6]">
                <span className="inline-flex justify-center items-center w-[2em] h-[2em] text-[0.7em] bg-brand-blue-dark mr-[0.6em] rounded-full">
                  <FaBriefcase />
                </span>
                Business &amp; Real-World
              </li>
              <li className="flex flex-1 items-center font-bold leading-[1.6]">
                <span className="inline-flex justify-center items-center w-[2em] h-[2em] text-[0.7em] bg-brand-blue-dark mr-[0.6em] rounded-full">
                  <FaAddressBook />
                </span>
                Personal &amp; Portfolio
              </li>
              <li className="flex flex-1 items-center font-bold leading-[1.6]">
                <span className="inline-flex justify-center items-center w-[2em] h-[2em] text-[0.7em] bg-brand-blue-dark mr-[0.6em] rounded-full">
                  <FaPuzzlePiece />
                </span>
                Games &amp; Puzzles
              </li>
              <li className="flex flex-1 items-center font-bold leading-[1.6]">
                <span className="inline-flex justify-center items-center w-[2em] h-[2em] text-[0.7em] bg-brand-blue-dark mr-[0.6em] rounded-full">
                  <FaProjectDiagram />
                </span>
                Project Add-Ons
              </li>
              <li className="flex flex-1 items-center font-bold leading-[1.6]">
                <span className="inline-flex justify-center items-center w-[2em] h-[2em] text-[0.7em] bg-brand-blue-dark mr-[0.6em] rounded-full">
                  <FaFlask />
                </span>
                Fun &amp; Interesting
              </li>
              <li className="flex flex-1 items-center font-bold leading-[1.6]">
                <span className="inline-flex justify-center items-center w-[2em] h-[2em] text-[0.7em] bg-brand-blue-dark mr-[0.6em] rounded-full">
                  <FaLeaf />
                </span>
                Productivity
              </li>
              <li className="flex flex-1 items-center font-bold leading-[1.6]">
                <span className="inline-flex justify-center items-center w-[2em] h-[2em] text-[0.7em] bg-brand-blue-dark mr-[0.6em] rounded-full">
                  <FaTools />
                </span>
                Tools &amp; Libraries
              </li>
              <li className="flex flex-1 items-center font-bold leading-[1.6]">
                <span className="inline-flex justify-center items-center w-[2em] h-[2em] text-[0.7em] bg-brand-blue-dark mr-[0.6em] rounded-full">
                  <FaRegClone />
                </span>
                Clones
              </li>
            </ul>
          </div>

          <p className="text-center text-[3.2vw] text-[clamp(2rem,3.2vw,3rem)] sm:text-[7vw]">
            Keep building and <strong>level up</strong>!
          </p>

        </Container>
      </Section>
    </>
  )
}
