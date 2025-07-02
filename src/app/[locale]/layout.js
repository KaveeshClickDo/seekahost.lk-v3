import { DM_Sans } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
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
    default: 'Web Hosting UK: Best Website Hosting Services | SeekaHost',
    template: '%s | SeekaHost UK'
  },
  description: 'UK Web hosting services company offering domains and WordPress hosting packages with cheap monthly pay plans to get online. Best 24/7 support UK Host!',
};

export default async function RootLayout({ 
  children, 
  params 
}) {
  // Handle i18n locale validation
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        {/* Add slick-carousel CSS via CDN */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
          integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
          integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body suppressHydrationWarning className={`${dmSans.variable} antialiased`}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}