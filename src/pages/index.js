import Head from 'next/head';
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

import styles from '../styles/Home.module.scss';

import * as gtag from '../lib/gtag';

import Main from '../components/Main';
import LogoHorizontal from '../components/LogoHorizontal';
import Container from '../components/Container';
import Section from '../components/Section';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

import imgOg50ReactProjects from '../images/50-react-projects-og.jpg';
import imgPreviewBrief from '../images/50-react-projects-business-real-world-ecommerce-store.jpg';
import imgPreviewCover from '../images/50-react-projects-cover-business-real-world.jpg';
import imgPreviewLayout from '../images/50-react-projects-ecommerce-store-layout.jpg';

const TITLE = '50 Projects for React & the Static Web';
const DESCRIPTION = 'Learn by doing with this FREE ebook! Dive in with 50 projects complete with project briefs and wireframes.';
const URL = 'https://50reactprojects.com';

const motionPreviewImages = {
  whileHover: {
    scale: 1.2,
    zIndex: 2
  }
}

export default function Home() {

  function handleOnFormSubmit(e = {}) {
    const { currentTarget } = e;

    e.preventDefault();

    gtag.event({
      category: 'resource',
      action: 'download',
      label: currentTarget.id
    });

    currentTarget.submit();
  }

  return (
    <>
      <Head>
        <title>{ TITLE }</title>
        <meta name="description" content={DESCRIPTION} />

        <meta property="og:url" content={URL} />
        <meta property="og:type" content="book" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={`${URL}${imgOg50ReactProjects}`} />
        <meta property="og:image:width" content="2024" />
        <meta property="og:image:height" content="1012" />
        <meta property="og:image:alt" content="50 Projects for React & the Static Web - Learn by doing with this FREE ebook!" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/images/favicon-512x512.png" />
      </Head>

      <Main>

        <Section backgroundColor="blue-dark">

          <Hero>

            <h1>
              <LogoHorizontal />
            </h1>

            <p className={styles.tagline}>
              <strong>Learn by doing</strong> with this <strong className={styles.purplelight}>FREE</strong> ebook!
            </p>

            <form id="hero" className={styles.form} action="https://app.convertkit.com/forms/1539376/subscriptions" method="post" onSubmit={handleOnFormSubmit}>
              <p>
                Get the <strong>FREE EBOOK</strong> straight to your inbox.
              </p>
              <input type="hidden" name="tags[]" value="1749930" />
              <label className={styles.sronly} htmlFor="email">Email Address</label>
              <input type="email" name="email_address" placeholder="Email Address" />
              <button>Get It Free</button>
            </form>

          </Hero>

        </Section>

        <Section id={styles.preview}>
          <Container>

            <h2>Not sure what to build?</h2>

            <p className={styles.subhead}>
              Dive in with <strong>50 projects</strong> complete
              with <strong className={styles.blue}>project briefs</strong> and <strong className={styles.purple}>wireframes</strong>!
            </p>

            <div className={styles.previewimage}>
              <motion.img width="612" height="792" src={imgPreviewBrief} alt="Example Ecommerce Store Project Brief" {...motionPreviewImages} />
              <motion.img width="612" height="792" src={imgPreviewCover} alt="Example Business and Real-world Cover" {...motionPreviewImages} />
              <motion.img width="612" height="792" src={imgPreviewLayout} alt="Example Ecommerce Store Design Layout" {...motionPreviewImages} />
            </div>

          </Container>
        </Section>

        <Section backgroundColor="blue">
          <Container>

            <h2>Learn by Doing</h2>

            <p>
              One of the best ways to learn is by <strong>doing the work</strong>. Choose
              from <strong>8 project categories</strong> and get started right away.
            </p>

            <div className={styles.topics}>
              <ul>
                <li>
                  <span><FaBriefcase /></span>
                  Business &amp; Real-World
                </li>
                <li>
                  <span><FaAddressBook /></span>
                  Personal &amp; Portfolio
                </li>
                <li>
                  <span><FaPuzzlePiece /></span>
                  Games &amp; Puzzles
                </li>
                <li>
                  <span><FaProjectDiagram /></span>
                  Project Add-Ons
                </li>
                <li>
                  <span><FaFlask /></span>
                  Fun &amp; Interesting
                </li>
                <li>
                  <span><FaLeaf /></span>
                  Productivity
                </li>
                <li>
                  <span><FaTools /></span>
                  Tools &amp; Libraries
                </li>
                <li>
                  <span><FaRegClone /></span>
                  Clones
                </li>
              </ul>
            </div>

            <p className={styles.subhead}>
              Keep building and <strong>level up</strong>!
            </p>

          </Container>
        </Section>

        <Section id={styles.start}>
          <Container>

            <h2>Start Doing Now</h2>

            <p className={styles.subhead}>
              Get these projects right to your inbox for <strong>FREE</strong>!
            </p>

            <form id="hero" className={styles.form} data-theme="light" action="https://app.convertkit.com/forms/1539376/subscriptions" method="post" onSubmit={handleOnFormSubmit}>
              <input type="hidden" name="tags[]" value="1749930" />
              <label className={styles.sronly} htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email_address" placeholder="Email Address" />
              <button id="footer" onClick={handleOnFormSubmit}>Get It Free</button>
            </form>

          </Container>
        </Section>

      </Main>

      <Footer />
    </>
  )
}
