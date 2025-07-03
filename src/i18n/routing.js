import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es', 'hk', 'hi', 'de', 'jp', 'pt', 'ru', 'fr', 'ae', 'id', 'kr'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});