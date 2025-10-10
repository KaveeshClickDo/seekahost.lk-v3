import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  // locales: ['en', 'es', 'zh-HK', 'hi', 'de', 'ja', 'pt', 'ru', 'fr', 'ae', 'id', 'kr'],
  locales: ['en'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  
  // Only show locale prefix when needed (not for default locale)
  // localePrefix: 'as-needed',
  localePrefix: 'never',
  
  // Optional: Configure locale detection
  localeDetection: true
});

// Alternative configurations:
// localePrefix: 'always' - Always show locale prefix (default behavior)
// localePrefix: 'as-needed' - Only show locale prefix for non-default locales
// localePrefix: 'never' - Never show locale prefix (not recommended for SEO)