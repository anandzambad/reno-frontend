# Renevo AI Work Planner UX

## UX principle
AI must make Renevo easier, not add another complicated module. The user sees **Generate Work Plan** and a simple draft review. Technical AI details remain hidden.

## First release UI

```text
Project
  -> Work
      -> Generate Work Plan ✨
          -> Review draft
              -> Edit / Add / Remove
                  -> Approve
                      -> Work Board
```

## Customer experience
Customers should not see model names, prompts, tokens, or AI provider settings. They see the normal project progress and work view.

## Contractor experience
Contractors get the AI action because they are the execution owner. AI creates a draft; the contractor remains responsible for correctness.

## Work Board integration
The AI output will eventually map to the existing simple board:

`TO DO -> IN PROGRESS -> BLOCKED -> DONE`

Generated tasks must not enter the board until the user explicitly approves them.

## Acceptance criteria

- One clear AI action: **Generate Work Plan**.
- Draft is editable before approval.
- No automatic financial changes.
- No automatic customer notification from an unapproved draft.
- User can reject the draft and continue manually.
- Mobile-first and accessible controls.
