# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into your Ágora Next.js application. The integration uses the modern `instrumentation-client.ts` approach recommended for Next.js 15.3+, which provides efficient client-side initialization without the need for a provider wrapper.

## Summary of Changes

1. **Created `instrumentation-client.ts`** - New client-side PostHog initialization file at the project root, configured with:
   - Environment variable-based configuration (`NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST`)
   - Automatic pageview and pageleave capture via `defaults: '2025-11-30'`
   - Exception capture enabled for error tracking
   - Debug mode in development environment

2. **Removed legacy initialization** - Deleted the old `src/lib/posthog-client.ts` and its import from `src/app/layout.tsx`

3. **Added 12 custom events** across key user interaction points focusing on conversion funnels, user engagement, and error tracking

## Events Implemented

| Event Name | Description | File Path |
|------------|-------------|-----------|
| `booking_modal_opened` | User clicked a CTA to open the booking/consultation modal - top of conversion funnel | `src/context/BookingContext.tsx` |
| `booking_modal_closed` | User closed the booking modal without completing - potential drop-off point | `src/components/booking/BookingModal.tsx` |
| `service_detail_viewed` | User clicked to view detailed information about a specific legal service | `src/app/[locale]/services/page.tsx` |
| `job_application_started` | User clicked Apply button for a job opening - careers funnel entry | `src/app/[locale]/careers/page.tsx` |
| `job_application_submitted` | User successfully submitted job application form - careers conversion | `src/components/careers/ApplicationModal.tsx` |
| `job_application_failed` | Job application submission failed - error tracking for careers funnel | `src/components/careers/ApplicationModal.tsx` |
| `team_member_profile_clicked` | User clicked to view a team member's detailed profile | `src/app/[locale]/team/page.tsx` |
| `team_member_linkedin_clicked` | User clicked LinkedIn link for a team member - external engagement | `src/app/[locale]/team/page.tsx` |
| `team_member_email_clicked` | User clicked email link for a team member - direct contact intent | `src/app/[locale]/team/page.tsx` |
| `language_switched` | User changed the site language - user preference tracking | `src/components/layout/LanguageSwitcher.tsx` |
| `contact_email_clicked` | User clicked the main contact email link | `src/app/[locale]/contact/page.tsx` |
| `external_recognition_clicked` | User clicked Chambers Global or other recognition badge links | `src/app/[locale]/page.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- **Analytics basics**: [https://us.posthog.com/project/279130/dashboard/1008765](https://us.posthog.com/project/279130/dashboard/1008765)

### Insights
- **Booking Funnel Conversion**: [https://us.posthog.com/project/279130/insights/JHGIxXBs](https://us.posthog.com/project/279130/insights/JHGIxXBs)
- **Job Application Funnel**: [https://us.posthog.com/project/279130/insights/7kkBFEE3](https://us.posthog.com/project/279130/insights/7kkBFEE3)
- **Key User Actions Trend**: [https://us.posthog.com/project/279130/insights/hQgulU1t](https://us.posthog.com/project/279130/insights/hQgulU1t)
- **Language Preference Distribution**: [https://us.posthog.com/project/279130/insights/sVTyjs3w](https://us.posthog.com/project/279130/insights/sVTyjs3w)
- **Application Errors Monitoring**: [https://us.posthog.com/project/279130/insights/ZUbtKe47](https://us.posthog.com/project/279130/insights/ZUbtKe47)

## Environment Variables

The following environment variables are configured in `.env.local`:

```
NEXT_PUBLIC_POSTHOG_KEY=phc_Ia1PnVlXYQ45Ih5TfrpQnQdaDmt5qgmsv9hBCiXJxqT
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

Make sure to add these to your production environment (Vercel, Netlify, etc.) as well.
