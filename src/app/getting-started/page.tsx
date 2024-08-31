import Section from '@/components/Section';
import Container from '@/components/Container';

export const metadata = {
  title: 'Getting Started - 50 Projects for React & the Static Web',
  description: 'Ready to get started? Check your inbox for your copy of 50 React Projects!'
}

export default function GettingStarted() {
  return (
    <>
      <Section>
        <Container className="grid md:grid-cols-[4fr_3fr] gap-12 md:-mt-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-8 text-center md:text-left">
              Getting Started
            </h1>

            <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-10 text-center md:text-left">
              Check your inbox!
            </h3>

            <p className="max-w-2xl text-lg sm:text-xl mb-8 text-center md:text-left">
              You should have just received your copy of the <strong>free 50 React Projects ebook</strong>.
              Dive in right away and find your favorite project idea to
              start learning by doing!
            </p>

            <p className="max-w-2xl text-xl sm:text-2xl font-semibold mb-8 text-center md:text-left">
              Looking for more resources?
            </p>

            <p className="max-w-2xl text-lg sm:text-xl text-center md:text-left">
              Find more React, Next.js, and other web dev tutorials <a className="underline underline-offset-1 hover:text-blue-500" href="https://www.youtube.com/colbyfayock">on Youtube</a>.
            </p>
          </div>

          <img
            className="hidden md:block rotate-1 rounded-lg shadow-xl border border-zinc-200"
            width="612"
            height="792"
            src="/images/50-react-projects-business-real-world-ecommerce-store.jpg"
            alt="Example Ecommerce Store Project Brief"
          />
        </Container>
      </Section>

      <Section backgroundColor="purple">
        <Container className="max-w-2xl text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center -mt-6 mb-6 sm:mb-12">
            Having trouble?
          </h2>

          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            I did not get the email.
          </h3>

          <p className="md:text-lg mb-12">
            If you never received an email, first try checking your Spam folder or
            your Promotions tab. You also may not have received it if you had previously
            signed up to download it due to system constrains, so try also checking your
            trash or archive.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Nothing is working, how can I get 50 React Projects?
          </h3>

          <p className="md:text-lg">
            If all else fails, feel free to shoot me an email at hello@colbyfayock.com
            and I'll send you a copy!
          </p>
        </Container>
      </Section>
    </>
  )
}