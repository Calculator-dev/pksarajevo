# pksarajevo

## Novosti (news)

Posts are Markdown files in `content/novosti/` (the file name is the URL: `/novosti/<file-name>`).

**Admin panel:** open `/admin/` on the live site, sign in with GitHub, and add or edit posts under **Novosti**.
Saving commits the post to `master`, and the host rebuilds the site automatically (takes a few minutes).
Check **Skica** to save a post without publishing it.

Sign-in uses a GitHub account with write access to this repo. The simplest option is **Sign in with token**:
create a fine-grained personal access token on GitHub limited to this repository, with *Contents: Read and write*.

The site address (`https://www.pksarajevo.com`) is set in `lib/site.ts`; `NEXT_PUBLIC_SITE_URL` only needs setting if the domain changes.
