export type Group = {
    groupId: string;
    name: string;
    comment?: string;
    budgets?: Budget[];
};

export type Budget = {
    year: number;
    active?: boolean;
    comment?: string;
    costCenters?: CostCenter[];
};

export type CostCenter = {
    name: string;
    comment?: string;
    darken?: boolean;
    budgetLines?: BudgetLine[];
};

export type BudgetLine = {
    name: string;
    income?: number;
    expense?: number;
    comment?: string;
    validFrom?: Date;
    validTo?: Date;
    editDate?: Date;
    editedBy?: string;
    darken?: boolean;
};
