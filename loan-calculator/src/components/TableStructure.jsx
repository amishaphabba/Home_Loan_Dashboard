import TableData from "./TableData"
import CalculatorContext from "../store/CalculatorContext";
import { useContext, useEffect } from "react";
import { calculateYearValues } from "../util";

const TableStructure = () => {
    const { interestArray, principalArray, balanceArray, emi, tableData, setTableData } = useContext(CalculatorContext)

    useEffect(() => {
        if (interestArray.length > 0 && !isNaN(interestArray[0])) {
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth() + 1;
            const currentYear = currentDate.getFullYear();
            const tenureForFirstYear = 12 - currentMonth + 1;

            const extractedData = calculateYearValues([interestArray, principalArray, balanceArray.slice(1)], tenureForFirstYear);

            setTableData({
                currentYear: currentYear,
                tenureForFirstYear: tenureForFirstYear,
                extractedData: {
                    interest: extractedData.interest,
                    principal: extractedData.principal,
                    balance: extractedData.balance,
                    monthlyInterest: extractedData.monthlyInterest,
                    monthlyPrincipal: extractedData.monthlyPrincipal,
                    monthlyBalance: extractedData.monthlyBalance
                }
            });

        }

    }, [interestArray, principalArray, balanceArray]);

    return (      
        <div className="table-card ">
            <table className="table-structure table table-striped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Year</th>
                        <th>Principal</th>
                        <th>Interest</th>
                        <th>Payment</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.extractedData.interest.map((interest, index) => (
                        <TableData
                            key={index}
                            index={index}
                            year={tableData.currentYear + index}
                            interest={interest}
                            principal={tableData.extractedData.principal[index]}
                            balance={tableData.extractedData.balance[index]}
                            payment={index !== tableData.extractedData.interest.length-1 ? emi*12 : emi*(12-tableData.tenureForFirstYear) }
                    />))}
                </tbody>
            </table>
        </div>
    )
}

export default TableStructure