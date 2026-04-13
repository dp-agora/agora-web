# Ágora — AEO Content Editorial Calendar

## Methodology

All articles follow Ethan Smith / Graphite's "start with prompts, not keywords" approach:
- Open with a clear entity definition (what is X)
- Include numbered step checklists
- Include a FAQ section at the end (minimum 4 Q&A pairs)
- Target 1,000–2,000 words minimum
- Add Article JSON-LD (done automatically by the insight page template)
- Each article must have a bilingual pair (EN + ES)

---

## Priority Prompt Clusters

These are the specific conversational queries Ágora's clients type into ChatGPT.

### Cluster 1: Venezuela Corporate Setup (HIGH PRIORITY)

**Primary prompt:** "How to set up a company in Venezuela as a foreign investor step by step"

| # | Article Title (EN) | Slug | Status | Target Length |
|---|---|---|---|---|
| 1 | How to Incorporate a Company in Venezuela: A Step-by-Step Guide | `incorporating-company-venezuela` | ✅ Published — expand & add FAQ | 1,500w |
| 2 | Types of Business Entities in Venezuela: Which Structure Is Right for You? | `business-entities-venezuela` | 🔴 TODO | 1,200w |
| 3 | Venezuela Corporate Good Standing: What It Means and How to Maintain It | `corporate-good-standing-venezuela` | ✅ Published — expand & add FAQ | 1,000w |
| 4 | Shareholder Agreements in Venezuela: Key Clauses and Drafting Considerations | `shareholder-agreements-venezuela` | 🔴 TODO | 1,500w |

---

### Cluster 2: OFAC Sanctions & Compliance (HIGH PRIORITY)

**Primary prompt:** "What do OFAC general licenses mean for my contracts with Venezuelan entities?"

| # | Article Title (EN) | Slug | Status | Target Length |
|---|---|---|---|---|
| 5 | OFAC General Licenses for Venezuela: A Plain-Language Guide (March 2026 Update) | `ofac-general-licenses-venezuela-march-2026` | ✅ Published — add structured checklist | 1,500w |
| 6 | Venezuela Sanctions Compliance Checklist for US Companies | `venezuela-sanctions-compliance-checklist` | 🔴 TODO | 1,200w |
| 7 | How to Conduct Sanctions Due Diligence on Venezuelan Counterparties | `sanctions-due-diligence-venezuela` | 🔴 TODO | 1,500w |
| 8 | OFAC Specific License Application: Process, Timeline, and Tips | `ofac-specific-license-application-process` | 🔴 TODO | 1,000w |

---

### Cluster 3: Investment Arbitration Against Venezuela (HIGH PRIORITY)

**Primary prompt:** "How to file an investment arbitration claim against Venezuela / ICSID process"

| # | Article Title (EN) | Slug | Status | Target Length |
|---|---|---|---|---|
| 9 | What Is Investment Arbitration? A Guide for Investors in Latin America | `what-is-investment-arbitration-latin-america` | 🔴 TODO | 1,500w |
| 10 | ICSID Arbitration Against Venezuela: Process, Timeline, and Key Considerations | `icsid-arbitration-venezuela-guide` | 🔴 TODO | 2,000w |
| 11 | Enforcing Arbitral Awards Against Venezuela: Jurisdictions and Strategies | `enforcing-arbitral-awards-venezuela` | 🔴 TODO | 1,500w |
| 12 | Bilateral Investment Treaties with Venezuela: Which Countries Are Covered? | `bilateral-investment-treaties-venezuela` | 🔴 TODO | 1,200w |

---

### Cluster 4: Fintech & Banking Regulation (MEDIUM PRIORITY)

**Primary prompt:** "How does fintech regulation work in Venezuela / SUDEBAN fintech rules"

| # | Article Title (EN) | Slug | Status | Target Length |
|---|---|---|---|---|
| 13 | Fintech Regulation in Venezuela: The ITFB Framework and SUDEBAN Guidelines | `fintech-venezuela-itfb-regulation` | ✅ Published | 1,200w |
| 14 | Payment Service Providers in Venezuela: Licensing Requirements and Compliance | `payment-service-providers-venezuela` | ✅ Published | 1,200w |
| 15 | Opening a Bank Account in Venezuela as a Foreign Company | `bank-account-venezuela-foreign-company` | 🔴 TODO | 800w |
| 16 | Venezuela Banking Compliance 2026: Key Regulatory Updates | `venezuela-banking-compliance-2026` | 🔴 TODO | 1,200w |

---

### Cluster 5: Cross-Border M&A and Tax (MEDIUM PRIORITY)

**Primary prompt:** "Tax structuring for cross-border M&A in Latin America / Venezuela acquisition tax"

| # | Article Title (EN) | Slug | Status | Target Length |
|---|---|---|---|---|
| 17 | Tax Considerations for Cross-Border M&A in Venezuela | `cross-border-ma-tax-venezuela` | 🔴 TODO | 1,500w |
| 18 | Transfer Pricing Rules in Venezuela: What Foreign Investors Need to Know | `transfer-pricing-venezuela` | 🔴 TODO | 1,200w |
| 19 | How to Repatriate Profits from Venezuela: Legal and Tax Framework | `repatriating-profits-venezuela` | 🔴 TODO | 1,200w |

---

## Publishing Cadence

- **Target:** 2–3 articles per month (at least 1 EN + 1 ES)
- **Priority order:** Clusters 1–3 first (highest search intent + AI citation value)
- **Format template:** See below

---

## Article Format Template

```markdown
---
title: "[Full article title]"
seoTitle: "[Title with keyword] | Ágora Abogados"
excerpt: "[2-3 sentence excerpt]"
seoDescription: "[150-160 character meta description with primary keyword]"
date: "YYYY-MM-DD"
lastUpdated: "YYYY-MM-DD"
lang: "en"
slug: "[kebab-case-slug]"
translationSlug: "[es-slug]"
author: "[Author Name]"
authorTitle: "[Practice Area / Role]"
authorUrl: "/team/[slug]"
category: "[Corporate | Tax | Arbitration | Compliance | Banking | Real Estate | Environmental | Labor]"
tags: ["Venezuela", "[topic]", "[topic]"]
readingTime: "[X min read]"
ogImage: "/assets/practices/[relevant-image].jpeg"
---

## What Is [Topic]? (Entity Definition)

[2-3 paragraph clear definition answering the conversational query directly]

## [Key Process / How It Works] (Step-by-Step)

1. **Step 1 title**: [Description]
2. **Step 2 title**: [Description]
3. **Step 3 title**: [Description]
...

## Key Considerations / Common Pitfalls

[Checklist or bullet points]

## Practical Examples

[1-2 concrete scenarios]

## Frequently Asked Questions

**Q: [Question 1]?**
A: [Answer]

**Q: [Question 2]?**
A: [Answer]

**Q: [Question 3]?**
A: [Answer]

**Q: [Question 4]?**
A: [Answer]

---
*Disclaimer: The content of this article is for informational purposes only and should not be considered legal advice.*
```

---

## YouTube Content Plan (Ethan Smith's 3rd proven AEO tactic)

Short explainer videos (5–8 min) that mirror the top article clusters:

1. "How to Set Up a Company in Venezuela in 2026" — mirrors Cluster 1
2. "OFAC Sanctions and Venezuela: What You Need to Know" — mirrors Cluster 2
3. "Investment Arbitration Against Venezuela: ICSID Explained" — mirrors Cluster 3
4. "Fintech in Venezuela: Regulatory Requirements for 2026" — mirrors Cluster 4

Post on YouTube → embed in corresponding article → AI systems cite both the page and the video.
