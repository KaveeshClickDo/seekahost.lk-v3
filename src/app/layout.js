import { Montserrat } from 'next/font/google';
import './globals.css';
import { siteSchema } from './schema';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: {
    default: 'Web Hosting Sri Lanka: Best Website Hosting Services | SeekaHost',
    template: '%s | SeekaHost'
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
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
