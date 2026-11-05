// Prefixes a file from public/ with the deploy base ("/" on Vercel,
// "/<repo>/" on GitHub Pages) so it resolves from any sub-path.
export const publicPath = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
