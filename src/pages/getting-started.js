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
              <LogoHorizontal />
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