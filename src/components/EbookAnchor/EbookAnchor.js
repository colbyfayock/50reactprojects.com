import Section from 'components/Section';
import Container from 'components/Container';
import FormEbook from 'components/FormEbook';

import styles from './EbookAnchor.module.scss';

const EbookAnchor = ({ children, id = 'footer'}) => {
  return (
    <Section className={styles.ebookAnchor}>
      <Container>
        <h2 className={styles.ebookAnchorHeadline}>Start Doing Now</h2>

        <p className={styles.ebookAnchorTagline}>
          Get all projects as an ebook right to your inbox for <strong>FREE</strong>!
        </p>

        <FormEbook id="footer" />
      </Container>
    </Section>
  )
}

export default EbookAnchor;