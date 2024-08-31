import React from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

import Section from '@/components/Section';
import Container from '@/components/Container';
import LogoHorizontal from '@/components/LogoHorizontal';
import { FaGithub } from 'react-icons/fa';

import Button from '@/components/Button';

const Nav = () => {
  return (
    <nav className="text-white bg-brand-blue-dark [&_a]:block [&_a]:no-underline">
      <Section className="py-4 md:py-6">
        <Container className="flex justify-between items-center">
          <div>
            <Link href="/">
              <LogoHorizontal className="w-60 h-auto" />
            </Link>
          </div>
          <ul className="flex items-center gap-6">
            {/* <SignedOut>
              <li className="flex items-center">
                <SignInButton>
                  <Button className="text-sm px-3 py-1 font-semibold">Sign In</Button>
                </SignInButton>
              </li>
            </SignedOut> */}
            <SignedIn>
              <li className="flex items-center">
                <UserButton />
              </li>
            </SignedIn>
            <li className="flex items-center">
              <a href="https://github.com/colbyfayock/50-projects-for-react-and-the-static-web" rel="noreferrer noopener">
                <FaGithub className="w-6 h-auto" />
              </a>
            </li>
          </ul>
        </Container>
      </Section>
    </nav>
  )
}

export default Nav;