import { Helmet } from 'react-helmet';
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

import Layout from 'components/Layout';
import LogoHorizontal from 'components/LogoHorizontal';
import Container from 'components/Container';
import Section from 'components/Section';
import Hero from 'components/Hero';
import Footer from 'components/Footer';
import FormEbook from 'components/FormEbook';

import imgPreviewBrief from 'images/50-react-projects-business-real-world-ecommerce-store.jpg';
import imgPreviewCover from 'images/50-react-projects-cover-business-real-world.jpg';
import imgPreviewLayout from 'images/50-react-projects-ecommerce-store-layout.jpg';

const motionPreviewImages = {
  whileHover: {
    scale: 1.2,
    zIndex: 2
  }
}

export default function Home() {
  return (
    <Layout displayNav={false}>
      <Helmet>
        <meta property="og:type" content="book" />
      </Helmet>

      <Section backgroundColor="blue-dark">

        <Hero>

          <h1>
            <LogoHorizontal />
          </h1>

          <p className={styles.tagline}>
            <strong>Learn by doing</strong> with this <strong className={styles.purplelight}>FREE</strong> ebook!
          </p>

          <FormEbook id="hero">
            <p>
              Get the <strong>FREE EBOOK</strong> straight to your inbox.
            </p>
          </FormEbook>

          <p className={styles.producthunt}>
            <a href="https://www.producthunt.com/posts/50-projects-for-react-the-static-web?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-50-projects-for-react-the-static-web" target="_blank">
              <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=238203&theme=light" alt="50 Projects For React & The Static Web - Learn by doing with this FREE ebook! | Product Hunt Embed" style={{
                width: '250px',
                height: '54px'
              }} width={250} height={54} />
            </a>
          </p>

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
    </Layout>
  )
}
