import { ScrollViewStyleReset } from 'expo-router/html';
import type { PropsWithChildren } from 'react';

// Root HTML document for the statically exported web build.
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#04101F" />
        <meta
          name="description"
          content="HUSMUN 4th Edition — Model United Nations at Hiranandani Upscale School, Chennai. 18th–19th December 2026."
        />
        <meta property="og:title" content="HUSMUN 2026 — Model United Nations" />
        <meta property="og:url" content="https://husmun.org" />
        <ScrollViewStyleReset />
        <style dangerouslySetInnerHTML={{ __html: 'html, body { background-color: #04101F; }' }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
