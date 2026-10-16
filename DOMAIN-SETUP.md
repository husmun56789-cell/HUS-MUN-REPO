# Connecting husmun.org (GoDaddy) to the HUSMUN website

The website is already live on a free Netlify address (for example `https://husmun.netlify.app`).
These steps make it open at **husmun.org** as well. It takes about 10 minutes of clicking,
and then up to a few hours for the change to reach everyone.

You do **not** need to share your GoDaddy password with anyone. You only add two records.

## Step 1 — The website owner adds the domain in Netlify

(Done by whoever manages the Netlify site.)

1. Open https://app.netlify.com, choose the HUSMUN site.
2. Go to **Domain management → Add a domain**.
3. Type `husmun.org`, click **Verify**, then **Add domain**.
4. Netlify will say the domain is "awaiting external DNS". That is expected — go to Step 2.

## Step 2 — You add two records in GoDaddy

1. Sign in at https://dcc.godaddy.com and open **My Products → husmun.org → DNS**
   (sometimes shown as **Manage DNS**).
2. **Edit the existing `A` record whose Name is `@`** (if there is one; GoDaddy often has a
   "Parked" record here). Set:

   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | A | @ | `75.2.60.5` | 1 Hour |

   If there is more than one `A` record named `@`, delete the others.
3. **Edit (or add) the `CNAME` record whose Name is `www`.** Set:

   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | CNAME | www | `husmun.netlify.app` | 1 Hour |

   Replace `husmun.netlify.app` with the site's actual Netlify address if it is different.
4. If GoDaddy has **Domain Forwarding** turned on for husmun.org, turn it off — it overrides
   these records.
5. Save.

## Step 3 — Check it works

- Within an hour or so (sometimes up to 24 hours), https://husmun.org will open the site.
- Netlify issues the secure padlock (HTTPS certificate) automatically once it sees the records.
  In Netlify under **Domain management → HTTPS**, click **Verify DNS configuration** if it hasn't
  appeared after a few hours.
- `www.husmun.org` will automatically redirect to `husmun.org`.

## Keeping the domain

The domain must be renewed with GoDaddy every year. Turn on **auto-renew** in GoDaddy so the
site doesn't go offline when the registration lapses.
