import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';

import rootCss from './root.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: rootCss },
];

export default function App() {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
} 
