import styles from './Footer.module.scss';

import Container from '../Container';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>
          &copy; { new Date().getFullYear() }, <a href="https://twitter.com/colbyfayock">Colby Fayock</a>
        </p>
      </Container>
    </footer>
  )
}

export default Footer;