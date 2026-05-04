import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames, exclude static action.json
  matcher: ['/', '/(en|es|fr|pt|de|zh|ja|ru)/:path*', '!/:path*/actions.json']
};
