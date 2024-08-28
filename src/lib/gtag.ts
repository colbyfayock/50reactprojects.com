export const GA_TRACKING_ID = 'UA-174985954-1';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages

export const pageview = (url: string) => {
  // @ts-expect-error
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events

interface EventOptions {
  action?: string;
  category?: string;
  label?: string;
  value?: string;
}

export const event = ({ action, category, label, value }: EventOptions) => {
  // @ts-expect-error
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
}