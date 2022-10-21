# Routes

## `/group`

A list of all the groups

- projects - only/none/both
- status - active/inactive/both

### `/group/:groupId`

A information about a specific group

#### `/group/:groupId/budgets`

- from - "2022/01/01"
- to - "2022/12/31"
- expenses - include/exclude

The budgets for a specific group. Returns all budgets by default, parameter to only show current.

## `/budget`

All the budgets for all the groups. Parameter to only show active.

### `/budget/:budgetId`

## `/costCenter`

### `/costCenter/:costCenterId`

## `/budgetLine`

### `/budgetLine/:budgetLineId`
