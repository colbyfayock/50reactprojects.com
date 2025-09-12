"use client";

import type { SyntheticEvent } from 'react';
import { useState } from 'react';

import * as gtag from '@/lib/gtag';
import { useNotification } from '@/components/NotificationContext';

import Button from '@/components/Button';
import Input from '@/components/Input';

interface FormEbookProps extends React.ComponentProps<'form'> {
  id?: string;
  inputClassName?: string;
}

const FormEbook = ({ id, children, inputClassName, ...rest }: FormEbookProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { showNotification } = useNotification();

  async function handleOnFormSubmit(e: SyntheticEvent) {
    e.preventDefault();

    if (isLoading) {
      return;
    }

    setIsLoading(true);

    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const formAction = target.action;


    gtag.event({
      category: 'resource',
      action: 'download',
      label: id
    });

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        if (result.redirectUrl) {
          window.location.href = result.redirectUrl;
        }
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      showNotification('error', 'Something went wrong, please try again');
      setIsLoading(false);
    }
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
      }} name="phone" defaultValue="" readOnly />
      <input type="hidden" name="redirect" value="https://50reactprojects.com/" />
      <input type="hidden" name="tags" value="location:50reactprojects.com" />
      <label className="sr-only" htmlFor="email">Email Address</label>
      <Input className={inputClassName} type="email" name="email" placeholder="Email Address" required />
      <Button isLoading={isLoading}>Get It Free</Button>
    </form>
  )
}

export default FormEbook;