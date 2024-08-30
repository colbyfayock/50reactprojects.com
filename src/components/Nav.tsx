import React from 'react';
import Link from 'next/link';
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

import Section from '@/components/Section';
import Container from '@/components/Container';
import LogoHorizontal from '@/components/LogoHorizontal';
import { cn } from '@/lib/util';

// import { buttonStyles } from '@/components/Button';
// import { cn } from '@/lib/util';

interface NavProps {
  layout?: string;
}

const Nav = ({ layout = 'standard' }: NavProps) => {
  return (
    <nav className="text-white bg-brand-blue-dark [&_a]:block [&_a]:no-underline">
      <Section className="py-4 md:py-6">
        <Container className={cn('flex justify-between items-center', layout === 'center' && 'justify-center')}>
          <div>
            <Link href="/">
              <LogoHorizontal className="w-60 h-auto" />
            </Link>
          </div>
          {/* <ul className="flex items-center">
            <li className="flex items-center">
              <SignedOut>
                <SignInButton className={cn(buttonStyles, 'text-sm px-3 py-1 font-semibold')} />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </li>
          </ul> */}
        </Container>
      </Section>
    </nav>
  )
}

export default Nav;