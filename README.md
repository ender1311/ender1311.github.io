# dan-luk.com

Static site for [dan-luk.com](https://dan-luk.com).

`/aiLeadGen` and `/aileadgen` are reverse-proxied via `vercel.json` to the aiLeadGen Next.js app at `https://sitelens-one.vercel.app/aiLeadGen` (the app uses `basePath` `/aiLeadGen`). Other paths still serve this repo’s static files.

Product pages (landing + support, privacy, terms):

- SiteProof: `/siteproof`, `/siteproof/privacy`, `/siteproof/terms`
- ReadySignal: `/readysignal`, `/readysignal/privacy`, `/readysignal/terms`
- aiNotetaker: `/ainotetaker`, `/ainotetaker/privacy`, `/ainotetaker/terms`

`/privacy/<slug>` and `/terms/<slug>` redirect to `/<slug>/privacy` and `/<slug>/terms`. Waitlist CTAs and legal contact use `CONTACT_EMAIL` in `apps/config.js`.
