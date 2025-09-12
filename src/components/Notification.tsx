"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useNotification } from '@/components/NotificationContext';

const Notification = () => {
  const searchParams = useSearchParams();
  const { notification: contextNotification, hideNotification } = useNotification();
  const [urlNotification, setUrlNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  useEffect(() => {
    const status = searchParams.get('status');
    const message = searchParams.get('message');

    if (status === 'success' && message) {
      setUrlNotification({
        type: 'success',
        message: decodeURIComponent(message)
      });
    } else if (status === 'error') {
      setUrlNotification({
        type: 'error',
        message: 'Something went wrong, please try again'
      });
    }
  }, [searchParams]);

  const notification = contextNotification || urlNotification;

  const handleClose = () => {
    if (contextNotification) {
      hideNotification();
    } else {
      setUrlNotification(null);
      // Clean up URL parameters
      const url = new URL(window.location.href);
      url.searchParams.delete('status');
      url.searchParams.delete('message');
      window.history.replaceState({}, '', url.toString());
    }
  };

  if (!notification) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 p-4 ${
      notification.type === 'success' 
        ? 'bg-green-500 text-white' 
        : 'bg-red-500 text-white'
    }`}>
      <div className="flex items-center justify-center max-w-4xl mx-auto">
        <p className="text-lg font-medium text-center flex-1">{notification.message}</p>
        <button
          type="button"
          onClick={handleClose}
          className="ml-4 text-white hover:text-gray-200 text-xl font-bold flex-shrink-0"
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Notification;