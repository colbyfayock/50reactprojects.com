import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { useSession, signIn, signOut } from 'next-auth/react';

import Section from 'components/Section';
import Container from 'components/Container';
import LogoHorizontal from 'components/LogoHorizontal';
import Button from 'components/Button';


import styles from './Nav.module.scss';

const Nav = () => {
  const { data: session } = useSession();
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
            <li className={`${styles.navAccount} ${session ? styles.navAccountAuth : ''}`}>
              { session && (
                <>
                  <span>{session.user.email}</span>
                  <Button onClick={() => signOut()}>Sign out</Button>
                </>
              )}
              { !session && (
                <>
                  <Button onClick={() => signIn()}>Sign in</Button>
                </>
              )}
            </li>
          </ul>
        </Container>
      </Section>
    </nav>
  )
}

export default Nav;