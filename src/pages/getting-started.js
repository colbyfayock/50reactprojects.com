import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.scss';

import Main from '../components/Main';
import LogoHorizontal from '../components/LogoHorizontal';
import Section from '../components/Section';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const TITLE = '50 Projects for React & the Static Web';
const DESCRIPTION = 'Learn by doing with this FREE ebook! Dive in with 50 projects complete with project briefs and wireframes.';

export default function GettingStarted() {
  return (
    <>
      <Head>
        <title>{ TITLE }</title>
        <meta name="description" content={DESCRIPTION} />

        <meta property="og:url" content="https://50reactprojects.com/" />
        <meta property="og:type" content="book" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content="https://50reactprojects.com/images/50-react-projects-og.jpg" />
        <meta property="og:image:width" content="2024" />
        <meta property="og:image:height" content="1012" />
        <meta property="og:image:alt" content="50 Projects for React & the Static Web - Learn by doing with this FREE ebook!" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/images/favicon-512x512.png" />
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
              Once you find one, make sure to share on Twitter with the <strong>#50reactprojects</strong>
              hashtag to let others know what you're working on!
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