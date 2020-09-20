import { Helmet } from 'react-helmet';
import styles from './Layout.module.scss';

import Nav from 'components/Nav';
import Main from 'components/Main';
import EbookAnchor from 'components/EbookAnchor';
import ShareAnchor from 'components/ShareAnchor';
import Footer from 'components/Footer';

import imgOg50ReactProjects from 'images/50-react-projects-og.jpg';

const SITE_NAME = '50 Projects for React & the Static Web';
const SITE_HOST = 'https://50reactprojects.com';
const SITE_DESCRIPTION = 'Learn by doing with this FREE ebook! Dive in with 50 projects complete with project briefs and wireframes.';
const ogImage = `${SITE_HOST}${imgOg50ReactProjects}`;

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
      <Helmet {...helmetSettings}>
        {pageTitle && <title>{ pageTitle }</title>}
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle ? titleTemplate.replace('%s', pageTitle) : SITE_NAME} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="2024" />
        <meta property="og:image:height" content="1012" />
        <meta property="og:image:alt" content="50 Projects for React & the Static Web - Learn by doing with this FREE ebook!" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={ogImage} />
        <meta property="twitter:site" content="@colbyfayock" />
        <meta property="twitter:creator" content="@colbyfayock" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/images/favicon-512x512.png" />
      </Helmet>

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