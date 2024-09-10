import { useContext } from "react"
import CalculatorContext from "../store/CalculatorContext"

const CardOutput = () => {
    const {emi} = useContext(CalculatorContext)

    return (
        <div className="output-card">
            <div className="output-block monthly-emi">
                    <div className="output-name">Monthly EMI</div>
                    <div className="output-value output-emi">
                        <span className="currency">₹</span><span>{emi}</span>
                    </div>
            </div>
        </div>
    )

}
export default CardOutput