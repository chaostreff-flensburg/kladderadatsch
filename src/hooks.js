// Disable SSR for all pages.
// See: https://github.com/sveltejs/kit/discussions/3365#discussioncomment-1976132
export async function handle({ event /* previously: request */, resolve }) {
  const response = await resolve(event, {
    ssr: false,
  });
  return response;
}
