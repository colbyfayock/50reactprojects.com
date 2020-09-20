import { Helmet } from 'react-helmet';
import styles from './Layout.module.scss';

import Nav from 'components/Nav';
import Main from 'components/Main';
import ShareAnchor from 'components/ShareAnchor';
import Footer from 'components/Footer';

const Layout = ({ children, frontMatter }) => {
  const { title } = frontMatter;

  const pageTitle = title;

  const helmetSettings = {
    defaultTitle: pageTitle,
    titleTemplate: `%s - ${pageTitle}`
  }

  return (
    <div className={styles.layoutContainer}>
      <Helmet {...helmetSettings}>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={pageTitle} />
        {/* <meta property="og:url" content={homepage} /> */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={pageTitle} />
      </Helmet>

      <Nav />

      <Main>{ children }</Main>

      <div>
        <ShareAnchor />
        <Footer />
      </div>
    </div>
  )
}

export default Layout;