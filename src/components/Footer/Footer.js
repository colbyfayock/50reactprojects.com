import { FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

import Section from 'components/Section';
import Container from 'components/Container';
import Button from 'components/Button';
import CosmoMono from 'components/CosmoMono';

import styles from './Footer.module.scss';

const Footer = () => {
  const authorName = 'Colby Fayock';
  const authorUrl = 'https://twitter.com/colbyfayock';

  return (
    <footer className={styles.footer}>
      <Section className={styles.footerSection}>
        <Container className={[styles.footerContainer, styles.footerContentContainer]}>
          <div className={styles.footerLegal}>
            <div>
              <p>
                &copy; { new Date().getFullYear() }, <a href={authorUrl}>{ authorName }</a>
              </p>
              <ul>
                <li>
                  <a href="https://twitter.com/colbyfayock">
                    <span className="sronly">Twitter</span>
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/colbyfayock">
                    <span className="sronly">GitHub</span>
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/colbyfayock">
                    <span className="sronly">YouTube</span>
                    <FaYoutube className={styles.footerIconYoutube} />
                  </a>
                </li>
              </ul>
            </div>
            <a href="https://spacejelly.dev" className={styles.footerCosmo}>
              <CosmoMono classNameStroke={styles.footerCosmoStroke} />
            </a>
          </div>
        </Container>
      </Section>
    </footer>
  )
}

export default Footer;