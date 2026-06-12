@AGENTS.md

# SEO Notes

## Preferred Domain

- Treat `https://www.milliyin.dev` as the single canonical site URL.
- Do not mix `https://milliyin.dev` and `https://www.milliyin.dev` in metadata, JSON-LD, sitemap entries, or robots settings.
- If the preferred domain ever changes, update `lib/site.ts` first and then verify the rest of the app uses it.

## SEO Source Of Truth

- Shared site constants live in `lib/site.ts`.
- Use `SITE_URL`, `SITE_NAME`, and `SITE_AUTHOR` instead of hardcoding the domain or author name in route metadata.

## Redirect Rule

- `next.config.ts` contains a redirect that sends apex-domain traffic from `milliyin.dev` to `www.milliyin.dev`.
- Keep this redirect aligned with the canonical URL in metadata.

## Files To Check When Google Shows The Wrong URL

- `app/layout.tsx`
- `app/page.tsx`
- `app/posts/[slug]/page.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- `next.config.ts`
- `lib/site.ts`

## Common Failure Pattern

- Homepage uses `www`, but post pages or JSON-LD use non-`www`.
- Server redirects one host, while canonicals point to the other.
- Result: mixed canonical signals, unstable Google snippets, and weaker indexing.

## Before Deploy

- Run `npm run build`.
- Confirm all canonicals and `og:url` values use `SITE_URL`.
- Confirm `robots.txt` and `sitemap.xml` point to the same preferred domain.
- If SEO changes were made, request reindexing in Google Search Console after deploy.
