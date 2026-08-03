# Reno Dispute Management UX

## Customer

From a booking/project page:

`Report an Issue` -> category -> description -> amount (if relevant) -> evidence upload -> submit.

Customer can see:

- case number
- status
- SLA/response target
- timeline
- messages
- evidence they submitted
- resolution proposal
- Accept / Reject
- Appeal where eligible

## Contractor

Contractor sees only cases associated with their own work and can:

- respond
- upload evidence
- propose rework/adjustment
- view resolution
- accept/reject proposal where allowed

## Support dashboard

Provide filters for:

- severity
- category
- status
- SLA breach risk
- amount disputed
- age
- assigned agent

Show a complete timeline and evidence panel. Destructive/financial actions require explicit confirmation and role authorization.

## UX safety

- Never expose private evidence to the opposite party unless policy permits it.
- Don't use public URLs for evidence objects.
- Display warnings for safety/fraud cases and route them to human support.
- Don't present an automated risk score as a final finding of fraud.
- Accessible status labels and keyboard navigation are required.
