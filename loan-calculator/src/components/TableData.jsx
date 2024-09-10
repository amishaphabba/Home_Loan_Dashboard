import { useContext, useState } from "react"
import CalculatorContext from "../store/CalculatorContext"

const TableData = (props) => {
    const {tableData, emi } = useContext(CalculatorContext)
    const [toggleButton, setToggleButton] = useState(false)
    const MonthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const currentDate = new Date()
    const currentMonth = currentDate.getMonth()

    const handleOnClick = () => {
        setToggleButton(!toggleButton)
    }

    return (
        <>
            <tr className="parent-row">
                <td><button id={props.index} className="toggle-button" onClick={handleOnClick}>{toggleButton==false ?"+" : "-"}</button></td>
                <td>{props.year}</td>
                <td>₹ {props.principal}</td>
                <td>₹ {props.interest}</td>
                <td>₹ {props.payment}</td>
                <td>₹ {props.balance}</td>
            </tr>
            {/* IF TOGGLE then show the sub DATA */}
            {toggleButton && 
            tableData.extractedData.monthlyInterest[props.index].map((item, i) => (
                <tr key={item}>
                <td></td>
                {/* If FIRST year then display month according to current month */}
                <td style={{fontWeight:"500"}}>{ props.index==0 ? MonthName[currentMonth+i] : MonthName[i]}</td> 
                <td>₹ {tableData.extractedData.monthlyPrincipal[props.index][i]}</td> 
                <td>₹ {item}</td>
                <td>₹ {emi}</td>
                <td>₹ {tableData.extractedData.monthlyBalance[props.index][i]}</td>
            </tr>
            )) 
        }
        </>
    )

}

export default TableData