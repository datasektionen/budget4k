import {
    Budget as PrismaBudget,
    BudgetLine as PrismaBudgetLine,
    CostCenter as PrismaCostCenter,
    Group as PrismaGroup
} from "@prisma/client";

// Overwrites a type in order to not get a union type when joining.
type Overwrite<T, U> = Omit<T, keyof U> & U;

export type Group = Overwrite<PrismaGroup, { comment?: string }> & {
    budgets?: Budget[];
};

export type Budget = Overwrite<PrismaBudget, { comment?: string }> & {
    costCenters?: CostCenter[];
};

export type CostCenter = Overwrite<PrismaCostCenter, { comment?: string }> & {
    budgetLines?: BudgetLine[];
};

export type BudgetLine = Overwrite<
    PrismaBudgetLine,
    {
        income?: number;
        expense?: number;
        comment?: string;
        validFrom?: Date;
        validTo?: Date;
        editDate?: Date;
        editedBy?: string;
    }
>;
