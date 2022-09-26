import { Budget, BudgetLine, Committee, CostCenter } from "@prisma/client";

export type BudgetCommittees = Budget & {
    committees: CommitteeCostCenters[];
};

export type CommitteeCostCenters = Committee & {
    costCenters: CostCenterBudgetLines[];
};

export type CostCenterBudgetLines = CostCenter & {
    budgetLines: BudgetLine[];
};
