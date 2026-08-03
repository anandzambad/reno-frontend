# Reno CRM UI

## Contractor CRM dashboard

Provide:

- Lead/contact list with search, filters and pagination
- Customer profile and project history
- Follow-ups due today
- Upcoming 30/60/90-day follow-ups
- Timeline of email/WhatsApp/SMS/manual interactions
- Next action and reschedule controls
- Consent/opt-out status
- Service and repeat-job history
- Conversion and repeat-customer metrics

## Customer profile

```text
Customer
Contact preferences / consent
Projects
Estimates
Quotations
Bookings
Invoices
Payments
Communication timeline
Next follow-up
```

## Follow-up card

```text
30 DAY FOLLOW-UP
Due: 12 Sep 2026
Reason: Satisfaction / support check
Channel: WhatsApp
Status: Scheduled

[Send Now] [Reschedule] [Skip]
```

Use accessible status text and don't rely on color alone.

## Settings

Contractors can configure per service category:

- 30-day follow-up on/off
- 60-day follow-up on/off
- 90-day follow-up on/off
- Email/WhatsApp/SMS channels
- Quiet hours
- Message templates

The UI should make consent and opt-out state obvious before sending.

## Notifications

The frontend should consume backend delivery status rather than assuming a send succeeded. Use React Query for paginated CRM data and invalidate affected contact/follow-up queries after mutations.

## Performance

- server-side pagination
- debounced search
- lazy-load long timelines
- avoid polling every contact
- use targeted refresh/events for due-task changes
