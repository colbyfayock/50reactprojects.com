import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.scss';

import Main from '../components/Main';
import LogoHorizontal from '../components/LogoHorizontal';
import Section from '../components/Section';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function GettingStarted() {
  return (
    <>
      <Head>
        <title key="title">Getting Started - 50 React Projects</title>
      </Head>

      <Main>

        <Section backgroundColor="blue-dark" spacing="compact">
          <Hero>
            <Link href="/">
              <a>
                <LogoHorizontal />
              </a>
            </Link>
          </Hero>
        </Section>

        <Section>
          <Container>

            <h1>Getting Started</h1>

            <h3>
              Check your inbox!
            </h3>

            <p>
              You should have just received your copy of the free 50 React Projects
              ebook. Dive in right away and find your favorite project idea to
              start learning by doing.
            </p>

            <p>
              Once you find one, make sure to share on Twitter with
              the <strong>#50reactprojects</strong> hashtag to let
              others know what you're working on!
            </p>

            <div className={styles.support}>
              <h3>Support this project!</h3>
              <p>
                Support this free ebook and future free videos, tutorials, and resources
                by <a href="https://github.com/sponsors/colbyfayock">sponsoring @colbyfayock on GitHub</a>!
              </p>
              <iframe className={styles.sponsor} src="https://github.com/sponsors/colbyfayock/button" title="Sponsor colbyfayock" height="35" width="116" style={{ border: 'none' }} />
            </div>

            <p className={styles.producthunt}>
              <a href="https://www.producthunt.com/posts/50-projects-for-react-the-static-web?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-50-projects-for-react-the-static-web" target="_blank">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=238203&theme=light" alt="50 Projects For React & The Static Web - Learn by doing with this FREE ebook! | Product Hunt Embed" style={{
                  width: '250px',
                  height: '54px'
                }} width={250} height={54} />
              </a>
            </p>

          </Container>
        </Section>

        <Section backgroundColor="blue">
          <Container>

            <h2>Having trouble?</h2>

            <h3>
              Didn't get an email?
            </h3>

            <p>
              If you never received an email, first try checking your Spam folder or
              your Promotions tab.
            </p>

            <p>
              If you still can't find it, did you sign up for a previous version of
              the ebook? Try searching in your email's Trash folder. The system I'm
              using to distribute this unfortunately can't send more than one download
              link between versions.
            </p>

            <p>
              If all else fails, feel free to shoot me an email at hello@colbyfayock.com
              and I'll send you a copy!
            </p>

          </Container>
        </Section>

        <Footer />

      </Main>
    </>
  )
}