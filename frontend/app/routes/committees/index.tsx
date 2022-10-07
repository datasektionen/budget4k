
import seed from "/home/adam/kth/sektionen/budget4k/frontend/seed.json";
import * as React from 'react';
import BudgetTable from "~/modules/budget-table";
import { Budget } from "~/types";
import { budgets } from "data";
import Seeds from "utils/seed";

export default function CommitteesRoute(){
    //console.log(seed.budget[0].committees[0].costCenters[0].budgetLines)
    
    
    function renderBudget(){
        Seeds()
        let res = seed.budget[0].committees[0].costCenters[0].budgetLines
        return res.map(res => 
            <table style={{width: "100%"}} key={res.budgetLineId}>
                
                <td>{res.name}</td>
                <td>{res.expense}</td>
                <td>{res.income}</td>
                <td>{res.comment}</td>
                
            </table>)}

    return(
        <main style={{ backgroundColor: 'red' }}>
            <h1 style={{ color: 'blue' }}>Budget för {seed.budget[0].committees[0].name}</h1>
            <table style={{ width: "100%" }}>
                <tbody>
                    <tr>
                        <th>Budgetpost</th>
                        <th>Utgift</th>
                        <th>Intäkt</th>
                        <th>Kommentar</th>
                    </tr>
                    <tr>{renderBudget()}</tr>
                </tbody>
            </table>
            <BudgetTable budget={seed as Budget} />
        </main>
    );
}