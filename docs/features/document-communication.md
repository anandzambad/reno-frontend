# Reno Document & Communication UX

## Contractor

Add a Documents area with tabs: Estimates, Quotations, Work Orders, Invoices, Receipts and Warranty.

Each document supports:

- Create/Edit/Duplicate
- PDF preview/download
- Email
- WhatsApp
- Secure link copy
- Delivery timeline
- Resend
- Reminder
- Convert to next document type

## Customer

Secure document page:

```text
Document
Contractor identity / verification
Project
Items
Subtotal / discount / tax / total
Validity

[Download PDF]
[Accept]
[Reject]
[Request Changes]
```

Acceptance must require authenticated customer context where the application already supports authentication; public links must be short-lived and scoped to the single document.

## Delivery UX

Show per-channel status:

`Queued -> Sent -> Delivered -> Viewed`

or `Failed` with a retry action.

Never expose provider API keys or WhatsApp credentials in Next.js client code.

## API integration

Use the backend `/api/v1/documents/*` contract. Keep document state server authoritative and invalidate/refetch React Query caches after mutations.

## Accessibility/performance

- keyboard-accessible document actions
- clear status labels, not color alone
- optimistic UI only for non-critical local actions
- lazy-load PDF preview
- avoid polling; use event refresh/webhooks where available
- prevent duplicate send clicks with idempotency-aware mutations
