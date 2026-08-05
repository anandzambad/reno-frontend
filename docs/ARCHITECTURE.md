# Renevo Frontend Architecture

## Principle
Keep the customer experience simple while separating domain code. Use a shell plus domain micro-app boundaries, with route-level lazy loading as the default lightweight strategy.

## Shell owns

- Authentication/session
- Permission checks
- Project context / Project ID
- Navigation
- Shared UI primitives
- Global error/loading handling

## Domain apps/modules

- Project
- Work
- Payment
- Material
- Supplier
- CRM/Admin
- AI Work Planner inside Work

## AI Work Planner flow

```text
Renevo Shell -> Work module -> AI Work Planner
                           |
                           v
                     Core backend
                           |
                           v
                       AI service
```

Generated work remains a draft until an authorized user approves it.

## Lightweight rules

- Lazy-load domain routes/components.
- Keep shared dependencies centralized and small.
- Do not duplicate authentication or API clients in each module.
- Do not introduce runtime module federation unless independent deployment is required.
- Keep AI libraries out of the browser; AI runs server-side.

## Future extraction

If a domain needs independent deployment, ownership or scaling, it can become a separately deployed micro-app behind the shell without redesigning the domain UI contract.
