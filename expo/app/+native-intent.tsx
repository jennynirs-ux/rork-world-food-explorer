/**
 * Decide where an incoming link (worldfoodexplorer://country/italy?tab=recipes,
 * notification taps, etc.) should land. Known in-app routes open directly;
 * anything else falls back to Explore.
 */
const ALLOWED_ROUTES = [
  /^\/country\/[a-z0-9-]+$/,
  /^\/(collections|ingredient-match|shopping-list|submit-recipe)$/,
  /^\/(cookbook|progress|profile|meal-plan)$/,
];

export function toAppPath(rawPath: string): string {
  try {
    // Strip a custom scheme ("worldfoodexplorer://country/italy" → "/country/italy").
    const withoutScheme = rawPath.replace(/^[a-z][a-z0-9+.-]*:\/\//i, '/');
    const [pathPart, query = ''] = withoutScheme.split('?');
    const path = ('/' + pathPart.replace(/^\/+/, '')).replace(/\/+$/, '').toLowerCase() || '/';
    if (path === '/') return '/';
    if (!ALLOWED_ROUTES.some(route => route.test(path))) return '/';
    const tab = new URLSearchParams(query).get('tab');
    return tab && /^(about|recipes|quiz)$/.test(tab) ? `${path}?tab=${tab}` : path;
  } catch {
    return '/';
  }
}

export function redirectSystemPath({ path }: { path: string; initial: boolean }) {
  return toAppPath(path);
}
