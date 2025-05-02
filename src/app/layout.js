import { DM_Sans } from 'next/font/google';
import './globals.css';
import { siteSchema } from './schema';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata = {
  robots: 'noindex,nofollow',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  // metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://dev.seekahost.lk'),
  title: {
    default: 'Web Hosting Sri Lanka: Best Website Hosting Services | SeekaHost',
    template: '%s | SeekaHost Sri Lanka'
  },
  description: 'Sri Lanka Web hosting services company offering domains and WordPress hosting packages with cheap monthly pay plans to get online. Best 24/7 support Lanka Host!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body suppressHydrationWarning className={`${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}