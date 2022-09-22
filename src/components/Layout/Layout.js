import Head from 'next/head';

import Nav from 'components/Nav';
import Main from 'components/Main';
import EbookAnchor from 'components/EbookAnchor';
import ShareAnchor from 'components/ShareAnchor';
import Footer from 'components/Footer';

import styles from './Layout.module.scss';

const SITE_NAME = '50 Projects for React & the Static Web';
const SITE_HOST = 'https://50reactprojects.com';
const SITE_DESCRIPTION = 'Learn by doing with this FREE ebook! Dive in with 50 projects complete with project briefs and wireframes.';
const ogImage = `${SITE_HOST}/images/50-react-projects-og.jpg`;

const Layout = ({ children, frontMatter = {}, displayNav = true }) => {
  const { title: pageTitle, path = '/', description = SITE_DESCRIPTION } = frontMatter;

  const pageUrl = `${SITE_HOST}${path}`;
  const titleTemplate = `%s - ${SITE_NAME}`;

  const helmetSettings = {
    defaultTitle: SITE_NAME,
    titleTemplate
  }

  return (
    <div className={styles.layoutContainer}>
      <Head>
        <title key="title">{ SITE_NAME }</title>
        <meta name="description" content={description} key="description" />
        <meta property="og:title" content={pageTitle ? titleTemplate.replace('%s', pageTitle) : SITE_NAME} key="og:title" />
        <meta property="og:description" content={description} key="og:description" />
        <meta property="og:url" content={pageUrl} key="og:url" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:site_name" content={SITE_NAME} key="og:site_name" />
        <meta property="og:image" content={ogImage} key="og:image" />
        <meta property="og:image:width" content="2024" key="og:image:width" />
        <meta property="og:image:height" content="1012" key="og:image:height" />
        <meta property="og:image:alt" content="50 Projects for React & the Static Web - Learn by doing with this FREE ebook!" key="og:image:alt" />
        <meta property="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta property="twitter:image" content={ogImage} key="twitter:image" />
        <meta property="twitter:site" content="@colbyfayock" key="twitter:site" />
        <meta property="twitter:creator" content="@colbyfayock" key="twitter:creator" />
      </Head>

      {displayNav && <Nav />}

      <Main>{ children }</Main>

      <div>
        <EbookAnchor />
        <ShareAnchor />
        <Footer />
      </div>
    </div>
  )
}

export default Layout;