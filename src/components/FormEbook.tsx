"use client";

import { SyntheticEvent } from 'react';

import * as gtag from '@/lib/gtag';

import Button from '@/components/Button';
import Input from '@/components/Input';

interface FormEbookProps extends React.ComponentProps<'form'> {
  id?: string;
  inputClassName?: string;
}

const FormEbook = ({ id, children, inputClassName, ...rest }: FormEbookProps) => {
  function handleOnFormSubmit(e: SyntheticEvent) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    gtag.event({
      category: 'resource',
      action: 'download',
      label: id
    });

    target.submit();
  }

  return (
    <form id="hero" className="flex flex-col gap-4 sm:max-w-xs mx-auto" method="POST" action="https://mailtik.spacejelly.dev/api/forms/50-projects-react" onSubmit={handleOnFormSubmit} {...rest}>
      { children }
      <input type="text" autoComplete="off" tabIndex={-1} style={{
        position: "absolute",
        left: "-9999px",
        width: "0",
        height: "0",
        border: "0",
        padding: "0",
        margin: "0",
        overflow: "hidden"
      }} name="phone" value="" />
      <input type="hidden" name="redirect" value="https://50reactprojects.com/" />
      <input type="hidden" name="tags" value="location:spacejelly.dev,testtag" />
      <label className="sr-only" htmlFor="email">Email Address</label>
      <Input className={inputClassName} type="email" name="email" placeholder="Email Address" required />
      <Button>Get It Free</Button>
    </form>
  )
}

export default FormEbook;