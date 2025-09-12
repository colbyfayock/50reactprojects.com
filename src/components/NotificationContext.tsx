"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface NotificationContextType {
  showNotification: (type: 'success' | 'error', message: string) => void;
  hideNotification: () => void;
  notification: {
    type: 'success' | 'error';
    message: string;
  } | null;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
  };

  const hideNotification = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider value={{ showNotification, hideNotification, notification }}>
      {children}
    </NotificationContext.Provider>
  );
};