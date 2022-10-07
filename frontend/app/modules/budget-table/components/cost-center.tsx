import { CostCenter } from "~/types"

const CostCenter = ({costCenters}: {costCenters: CostCenter[]}) => {
    return(
        <tbody>
           {costCenters.map(costCenter => {
            return(
                
            )
           })} 
        </tbody>
    )
}
export default CostCenter