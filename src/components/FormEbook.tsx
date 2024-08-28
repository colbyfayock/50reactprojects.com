"use client";

import { SyntheticEvent } from 'react';

import * as gtag from '@/lib/gtag';

import Button from '@/components/Button';

interface FormEbookProps extends React.ComponentProps<'form'> {}

const FormEbook = ({ children, ...rest }: FormEbookProps) => {
  function handleOnFormSubmit(e: SyntheticEvent) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    gtag.event({
      category: 'resource',
      action: 'download',
      label: target.id
    });

    console.log('target.id', target.id)

    target.submit();
  }

  return (
    <form id="hero" className="flex flex-col gap-4 max-w-sm p-6 mx-auto" action="https://app.convertkit.com/forms/1588410/subscriptions" method="post" onSubmit={handleOnFormSubmit} {...rest}>
      
      { children }

      <input className="hidden" type="checkbox" name="tags[]" value="1749930" checked readOnly />
      <input className="hidden" type="checkbox" name="tags[]" value="1787072" checked readOnly />
      
      <label className="sr-only" htmlFor="email">Email Address</label>

      <input className="block w-full text-center px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" type="email" name="email_address" placeholder="Email Address" required />
      
      <Button>Get It Free</Button>
      
      <p className="text-xs text-gray-500 text-center mt-2">
        v1.0
      </p>
    </form>
  )
}

export default FormEbook;