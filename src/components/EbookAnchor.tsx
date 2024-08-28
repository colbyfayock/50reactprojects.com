import Section from '@/components/Section';
import Container from '@/components/Container';
import FormEbook from '@/components/FormEbook';

const EbookAnchor = () => {
  return (
    <Section className="text-center py-12">
      <Container>
        <h2 className="text-5xl m-0">Start Doing Now</h2>

        <p className="text-3xl my-6 mb-8">
          Get all projects as an ebook right to your inbox for <strong>FREE</strong>!
        </p>

        <FormEbook id="footer" />
      </Container>
    </Section>
  )
}

export default EbookAnchor;