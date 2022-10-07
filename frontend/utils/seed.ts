import seed from "/home/adam/kth/sektionen/budget4k/frontend/seed.json";
import {Group, Budget, CostCenter, BudgetLine } from "~/types"
const Seeds = () => {
    console.log(seed);
    seed.budget.forEach(budget => {
        
    });
}
export default Seeds;