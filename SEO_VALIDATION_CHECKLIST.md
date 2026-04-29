# SEO Validation Checklist — Skill City Facility Solutions

Use this after deploying to validate SEO, redirects, sitemap, and crawlability.

---

## 1. Redirects (301)

Run from terminal (replace with your deployed URL if different):

```bash
# Builders cleaning → services/builders-cleaning
curl -sI "https://www.skillcityfacilitysolutions.com.au/builders-cleaning" | grep -i "location\|http"

# Other cleaning services → services/house-cleaning
curl -sI "https://www.skillcityfacilitysolutions.com.au/other-cleaning-services" | grep -i "location\|http"

# Legacy /about → /about-us
curl -sI "https://www.skillcityfacilitysolutions.com.au/about" | grep -i "location\|http"

# Legacy /contact → /contact-us
curl -sI "https://www.skillcityfacilitysolutions.com.au/contact" | grep -i "location\|http"
```

**Expected:** Each response should include `Location:` with the new URL and status `301` (or `308`).

---

## 2. Sitemap

```bash
# Fetch sitemap
curl -s "https://www.skillcityfacilitysolutions.com.au/sitemap.xml"
```

**Check:**
- Contains `https://www.skillcityfacilitysolutions.com.au`
- Contains `/services`, `/services/house-cleaning`, `/services/builders-cleaning`
- Contains `/about-us`, `/contact-us`
- Does **not** list `/about` or `/contact` (those redirect)

---

## 3. robots.txt

```bash
curl -s "https://www.skillcityfacilitysolutions.com.au/robots.txt"
```

**Expected:**  
`User-agent: *` with `Allow: /` and `Sitemap: https://www.skillcityfacilitysolutions.com.au/sitemap.xml`

---

## 4. Per-page SEO (curl + grep)

For each URL, confirm canonical and meta (optional: use browser View Source):

```bash
BASE="https://www.skillcityfacilitysolutions.com.au"

# Home — canonical
curl -s "$BASE" | grep -i "canonical\|og:url"

# Services
curl -s "$BASE/services" | grep -i "canonical\|og:url"

# Service subpages
curl -s "$BASE/services/house-cleaning" | grep -i "canonical\|og:url"
curl -s "$BASE/services/builders-cleaning" | grep -i "canonical\|og:url"

# About & Contact
curl -s "$BASE/about-us" | grep -i "canonical\|og:url"
curl -s "$BASE/contact-us" | grep -i "canonical\|og:url"
```

---

## 5. JSON-LD (structured data)

- **Home:** LocalBusiness (+ WebSite, Organization) in `layout.tsx`.
- **Services:** ItemList + BreadcrumbList in `/services`.
- **Service pages:** Service + BreadcrumbList on `/services/house-cleaning` and `/services/builders-cleaning`.
- **Contact:** FAQPage on `/contact-us`.

Validate with:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/) (paste page URL or HTML)

---

## 6. Google Search Console

1. **URL Inspection** for:
   - `https://www.skillcityfacilitysolutions.com.au`
   - `https://www.skillcityfacilitysolutions.com.au/services`
   - `https://www.skillcityfacilitysolutions.com.au/services/house-cleaning`
   - `https://www.skillcityfacilitysolutions.com.au/services/builders-cleaning`
   - `https://www.skillcityfacilitysolutions.com.au/about-us`
   - `https://www.skillcityfacilitysolutions.com.au/contact-us`
2. **Sitemaps:** Submit `https://www.skillcityfacilitysolutions.com.au/sitemap.xml` and confirm “Success” and discovered URLs.
3. **Coverage:** After a few days, check that key pages are “Indexed” and no critical “Excluded” issues.

---

## 7. Lighthouse SEO (Chrome DevTools)

1. Open any key page.
2. DevTools → Lighthouse → SEO.
3. Run report. Ensure:
   - Document has a `<title>`
   - Meta description present
   - Page has successful HTTP status
   - Links are crawlable
   - No blocking robots

---

## 8. Internal links (sitelinks)

Confirm these links exist in header/footer and key sections:

- `/`
- `/services`
- `/services/house-cleaning`
- `/services/builders-cleaning`
- `/about-us`
- `/contact-us`

---

## 9. Local SEO / NAP

- **Footer:** NAP (4A Haughton Road, Oakleigh, 3166 VIC; phone; email) and “Service area: Melbourne, Victoria, Australia”.
- **Schema:** LocalBusiness in layout includes address, telephone, email, areaServed, openingHours, sameAs.

---

## Placeholders to replace (if not set)

- **Phone:** Already set (03 9034 6492 / +61390346492).
- **Email:** Already set (admin@skillcityfacilitysolutions.com.au).
- **Logo URL:** Uses `/SkillCityPNGLOGO.png` (relative).
- **Socials:** Footer uses facebook/skillcityfs, twitter/skillcityfs, instagram/skillcityfs, linkedin/company/skillcityfs.
- **Opening hours:** In schema (Mon–Fri 08:00–18:00, Sat 09:00–16:00).

Once the above checks pass, core SEO, redirects, sitemap, and GSC crawlability are in good shape.
