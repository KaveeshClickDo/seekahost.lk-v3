import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es', 'hk', 'hi', 'de', 'jp', 'pt', 'ru', 'fr', 'ae', 'id', 'kr'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  
  // Only show locale prefix when needed (not for default locale)
  localePrefix: 'as-needed',
  
  // Optional: Configure locale detection
  localeDetection: true
});

// Alternative configurations:
// localePrefix: 'always' - Always show locale prefix (default behavior)
// localePrefix: 'as-needed' - Only show locale prefix for non-default locales
// localePrefix: 'never' - Never show locale prefix (not recommended for SEO)