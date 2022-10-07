export type Group = {
    groupId: number,
    name: string,
    comment?: string,
    budgets?: Budget[]
}

export type Budget = {
    budgetId: number,
    groupId: number,
    year: number,
    active: boolean,
    costCenters?: CostCenter[]
}

export type CostCenter = {
    costCenterId: number,
    name: string,
    comment?: string,
    darken: boolean,
    budgetId: number,
    budgetLines?: BudgetLine[]
}

export type BudgetLine = {
    budgetLineId: number,
    name: string,
    income: number,
    expense: number,
    comment?: string,
    validFrom: Date,
    validTo: Date,
    editDate?: Date,
    editedBy?: string,
    darken: boolean,
    costCenterId: number
}
