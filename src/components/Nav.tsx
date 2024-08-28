import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';

import Section from '@/components/Section';
import Container from '@/components/Container';
import LogoHorizontal from '@/components/LogoHorizontal';
import Button from '@/components/Button';

const Nav = () => {
  const { data: session } = useSession();

  return (
    <nav className="text-white bg-brand-blue-dark [&_a]:block [&_a]:no-underline">
      <Section className="py-4">
        <Container className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <LogoHorizontal />
            </Link>
          </div>
          <ul className="flex items-center">
            <li className={`flex items-center ${session ? 'space-x-4' : ''}`}>
              { session && (
                <>
                  <span className="text-gray-700">{(session as Session).user?.email}</span>
                  <Button className="text-sm px-3 py-2 font-semibold" onClick={() => signOut()}>Sign Out</Button>
                </>
              )}
              { !session && (
                <>
                  <Button className="text-sm px-3 py-2 font-semibold" onClick={() => signIn()}>Sign In</Button>
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