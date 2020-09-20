import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import Section from 'components/Section';
import Container from 'components/Container';
import LogoHorizontal from 'components/LogoHorizontal';

import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Section className={styles.navSection}>
        <Container className={styles.navContainer}>
          <div className={styles.navLogo}>
            <Link href="/">
              <a>
                <LogoHorizontal />
              </a>
            </Link>
          </div>
          <ul className={styles.navLinks}>
            <li>
              <a href="https://github.com/colbyfayock/50-projects-for-react-and-the-static-web">
                <FaGithub />
                <span className="sronly">GitHub</span>
              </a>
            </li>
          </ul>
        </Container>
      </Section>
    </nav>
  )
}

export default Nav;