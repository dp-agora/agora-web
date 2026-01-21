# Ágora Website - Development Guidelines

## SEO-AEO Playbook (Entro Ruleset)

### 1. Technical Foundation
- Every published URL must be server-renderable (no JS-only critical content)
- Clean **200 OK** response (no redirect chains)
- Canonical tags set correctly on all pages
- Included in sitemap and discoverable via internal links
- **Internationalization:**
  - Primary language (EN) at root (`/`)
  - Spanish in subfolder (`/es/`)
  - hreflang implemented for all language variants

### 2. Topical Architecture
- Every page must map to a Topic Cluster (1 hub page + supporting subpages)
- Build topic dominance through semantic coverage
- Cluster planning is mandatory before publishing net-new pages

### 3. Internal Linking Targets
- **Tier A (hub/money pages):** 8-15 inbound internal links
- **Tier B (support pages):** 5-10 inbound internal links
- No orphan pages allowed
- Links must be contextual and topically adjacent
- Footer is a Tier-A internal linking surface

### 4. Editorial Quality
- Intent-based depth:
  - Support pages: 600-1,200 words
  - Hubs: 1,200-2,500+ words
  - Landing pages: 500-1,200 words
- Every page must include examples, clear framework/checklist, strong scannability

### 5. AEO (Answer Engine Optimization)
- Implement schema: Organization, Website, Service, FAQ, Article
- Each key page must define:
  - Entity (what it is)
  - Relationships (who it serves, what it connects to)
  - Proof (examples, references)
- Optimize for answer formats: definitions, comparisons, steps/checklists, FAQs

### 6. Page Validation Checklist
Before publishing any page:
- [ ] Server-renderable content
- [ ] Clean canonical tag
- [ ] In sitemap
- [ ] Has internal links pointing to it (no orphans)
- [ ] Has internal links pointing out
- [ ] hreflang tags for EN/ES
- [ ] Schema markup where applicable

## Practice Areas (Canonical URLs)
- `/practices/corporate-ma`
- `/practices/banking-finance`
- `/practices/tax`
- `/practices/compliance-sanctions`
- `/practices/litigation-disputes`
- `/practices/investment-arbitration`
- `/practices/real-estate`
- `/practices/environmental`
- `/practices/labor-employment`

## Legal Pages (Planned)
- `/privacy-policy` - Privacy Policy
- `/legal-terms` - Legal Terms
- `/disclaimers` - Disclaimers & Notices

*Note: Legal page content to be implemented in follow-up PR*
