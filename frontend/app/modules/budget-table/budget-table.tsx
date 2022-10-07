import { Budget } from "~/types"
import BudgetLines from "./components/budget-lines"
import TableHead from "./components/table-head"

 const BudgetTable = ({budget}: {budget: Budget[]}) => {
    return(
        <><TableHead /><BudgetLines budgetlines={[]} /></>
    )
}
export default BudgetTable