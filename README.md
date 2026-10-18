# pksarajevo

## Novosti (news)

Posts are Markdown files in `content/novosti/` (the file name is the URL: `/novosti/<file-name>`).

**Admin panel:** open `https://www.pksarajevo.com/admin/`, log in with email and password, and add or edit posts under **Novosti**.
Publishing commits the post to `master`, and Render rebuilds the site automatically (takes a few minutes).
Check **Skica** to save a post without publishing it. Extra photos go in **Galerija**.

Logins are handled by [DecapBridge](https://decapbridge.com) (Decap CMS + git-gateway), so editors don't need a GitHub account.
Invite or remove editors from the DecapBridge dashboard. The DecapBridge site ID is in the `auth_endpoint`
lines of `public/admin/config.yml`; the GitHub token lives only in the DecapBridge dashboard.

**Try the admin locally (no login):** run `npm run dev` and `npx decap-server` in two terminals, then open
`http://localhost:3000/admin/index.html`. Changes are written straight to the files in your checkout.

The site address (`https://www.pksarajevo.com`) is set in `lib/site.ts`; `NEXT_PUBLIC_SITE_URL` only needs setting if the domain changes.
