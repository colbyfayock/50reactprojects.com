import { FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

import Section from '@/components/Section';
import Container from '@/components/Container';
import CosmoMono from '@/components/CosmoMono';

const Footer = () => {
  const authorName = 'Colby Fayock';
  const authorUrl = 'https://twitter.com/colbyfayock';

  return (
    <footer className="bg-brand-blue-dark text-blue-100">
      <Section className="text-center py-2 md:py-4 m-0">
        <Container className="flex flex-row items-center justify-center text-center py-4">
          <div className="flex justify-center items-center gap-4">
            <div>
              <p className="text-lg">
                &copy; { new Date().getFullYear() }, <a href={authorUrl} className="font-semibold hover:text-white">{ authorName }</a>
              </p>
              <ul className="flex list-none gap-4 p-0 mt-2">
                <li>
                  <a href="https://twitter.com/colbyfayock">
                    <span className="sr-only">Twitter</span>
                    <FaTwitter className="text-blue-100 hover:text-white w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/colbyfayock">
                    <span className="sr-only">YouTube</span>
                    <FaYoutube className="text-blue-100 hover:text-white w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/colbyfayock">
                    <span className="sr-only">GitHub</span>
                    <FaGithub className="text-blue-100 hover:text-white w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>
            <a href="https://spacejelly.dev" className="-scale-x-100">
              <CosmoMono />
            </a>
          </div>
        </Container>
      </Section>
    </footer>
  )
}

export default Footer;