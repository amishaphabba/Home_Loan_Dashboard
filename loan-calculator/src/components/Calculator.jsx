import CardCalculator from "./CardCalculator";
import CardOutput from "./CardOutput";
import CalculatorContext from "../store/CalculatorContext";
import { useState } from "react";
import PieChart from "./PieChart";
import TableStructure from "./TableStructure";
import BarGraph from "./BarGraph";

const Calculator = () => {
    const [emi, setEmi] = useState()
    const [amount, setAmount] = useState(2500000)
    const [totalInterest, setTotalInterest] = useState()
    const [tenure, setTenure] = useState(4)
    const [interest, setInterest] = useState(10)
    const [interestArray, setInterestArray] = useState([])
    const [principalArray, setPrincipalArray] = useState([])
    const [balanceArray, setBalanceArray] = useState([])
   

    const [tableData, setTableData] = useState({
        currentYear: null,
        tenureForFirstYear: null,
        extractedData: {
            interest: [],
            principal: [],
            balance: [],
            monthlyInterest:[],
            monthlyPrincipal:[],
            monthlyBalance:[]
        }
    });

    return (
        <CalculatorContext.Provider value={{
            emi, setEmi,
            amount, setAmount,
            totalInterest, setTotalInterest,
            tenure, setTenure,
            interest, setInterest,
            interestArray, setInterestArray,
            principalArray, setPrincipalArray,
            balanceArray, setBalanceArray,
            tableData, setTableData,
        }}>
            <div className="loan-calculator">
               
                <div className="card">
                <h1>Home Loan EMI Calculator</h1>
                <p> Ready to find your dream home 😍 Get started today by using our free home loan calculator! </p>

                    <CardCalculator></CardCalculator>
                    <CardOutput></CardOutput>
                    <PieChart></PieChart>
                </div>
                <BarGraph></BarGraph>
                <TableStructure></TableStructure>
                
            </div>
        </CalculatorContext.Provider>

    )

}
export default Calculator