import { BudgetLine } from "~/types"
import TableRow from "./table-row"

const BudgetLines = ({budgetlines}: {budgetlines: BudgetLine[]}) => {
    budgetlines.map(budgetline => {
        if(budgetline.darken===true){return(<div/>)}
        return(<div>Hello</div>)
    })
}

export default BudgetLines