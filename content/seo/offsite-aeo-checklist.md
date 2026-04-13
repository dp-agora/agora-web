# Ágora — Off-Site AEO Checklist

Per Ethan Smith (Graphite): off-site signals are the #2 differentiator between SEO and AEO.
AI systems validate entity authority by checking where a brand appears across the web.

---

## Legal Directory Profiles (CRITICAL)

These domains are frequently cited by ChatGPT and Perplexity for legal queries. Complete profiles = AI citation opportunities.

| Directory | Profile Status | URL to Complete/Claim | Priority |
|---|---|---|---|
| **Chambers & Partners** | ✅ Listed (Álvaro Posada) | https://chambers.com/lawyer/alvaro-posada-latin-america-9:210039 | Add firm profile + all team rankings |
| **IFLR1000** | ✅ Listed (Álvaro Posada) | https://www.iflr1000.com/Lawyer/alvaro-j-posada/Profile/85 | Add firm profile + additional attorneys |
| **ITR World Tax** | ✅ Listed (José Barnola) | https://www.itrworldtax.com/Lawyer/... | Add firm profile |
| **Martindale-Hubbell** | ❓ Check status | https://www.martindale.com | Create/claim firm profile |
| **Legal 500** | ❓ Check status | https://www.legal500.com | Submit firm for ranking |
| **Justia** | ❓ Check status | https://www.justia.com | Create attorney profiles |
| **Avvo** | ❓ Check status | https://www.avvo.com | Create attorney profiles |
| **Lexology** | ❓ Check status | https://www.lexology.com | Register and syndicate articles |
| **JD Supra** | ❓ Check status | https://www.jdsupra.com | Register and syndicate articles |

**Action items:**
- [ ] Claim/create Martindale-Hubbell firm profile
- [ ] Submit to Legal 500 Latin America ranking
- [ ] Create Lexology account and syndicate all existing insight articles
- [ ] Create JD Supra account and syndicate all existing insight articles
- [ ] Ensure all Chambers/IFLR profiles link back to agoralatam.com

---

## Content Syndication (MEDIUM PRIORITY)

### Lexology
- Register at lexology.com/register
- Upload all 10 existing insights articles
- Going forward: publish every new article on Lexology 1 week after it goes live on the site
- Lexology is frequently cited by ChatGPT for legal content

### JD Supra
- Register at jdsupra.com
- Focus on Venezuela/LatAm regulatory and compliance articles
- JD Supra is a high-authority domain for legal AI citations

---

## Reddit Strategy (Ethan Smith Method)

Do NOT create fake accounts. Authentic engagement only.

### Target Subreddits

| Subreddit | Focus | Engagement Type |
|---|---|---|
| r/venezuela | Venezuela business/legal topics | Answer legal questions authentically |
| r/expats | Expat business setup questions | Answer incorporation/tax questions |
| r/internationalbusiness | Cross-border business | Answer LatAm structuring questions |
| r/investing | Investment protection/arbitration | Answer OFAC/sanctions questions |
| r/legaladvice | General legal questions | Not recommended (mod restrictions) |

### How to Engage (Smith's Guidelines)
1. Search for threads where users are already asking about Venezuela legal/business topics
2. Respond with genuine expertise — no links to the site unless directly relevant and permitted
3. If someone mentions Ágora in a thread, engage honestly and add value
4. Create content (articles) that addresses recurring Reddit questions

### Search Queries to Monitor
- `site:reddit.com Venezuela law firm`
- `site:reddit.com OFAC Venezuela compliance`
- `site:reddit.com investment arbitration Venezuela`
- `site:reddit.com incorporating company Venezuela`

---

## Organization Schema Enhancement

Update the Organization schema in `src/app/[locale]/layout.tsx` to add:

```json
"sameAs": [
  "https://www.linkedin.com/company/agora-latam",
  "https://chambers.com/firm/[agora-firm-id]",
  "https://www.iflr1000.com/Firm/[agora-firm-id]"
],
"award": [
  "Chambers Global",
  "Chambers Latin America",
  "IFLR1000",
  "ITR World Tax"
]
```

---

## LinkedIn (Already Active)

- Continue posting insights articles as LinkedIn posts with link back to site
- Tag all team members in relevant posts (drives individual profile authority)
- Add "View full article at agoralatam.com/insights/[slug]" to every post

---

## YouTube (Ethan Smith's #2 Proven AEO Tactic)

See `editorial-calendar.md` for the 4 priority video topics.

Setup:
1. Create Ágora YouTube channel (if not already exists)
2. Record 4 explainer videos (5–8 min each)
3. Embed each video in the corresponding insight article
4. Use the same conversational title as the article (matches AI prompts)
5. Include full transcript in the video description

---

## Tracking Off-Site Progress

Each month, run these checks:
1. Google: `"Ágora Abogados" site:lexology.com` — verify articles indexed
2. Google: `"Ágora Abogados" site:jdsupra.com` — verify articles indexed
3. ChatGPT: "Who are the top law firms for Venezuela investment arbitration?" — check for citations
4. Perplexity: "Venezuela corporate law firms" — check for citations
