import { useEffect, useState, useContext } from "react"
import { calculateEMI } from "../util"
import CalculatorContext from "../store/CalculatorContext"
import { loanAmortization } from "../util"
import { useCallback } from "react"

const CardCalculator = () => {

    const [message, setMessage] = useState("")
    const [inputObj, setInputObj] = useState()
    const {emi, setEmi, amount, setAmount, interest, setInterest, tenure, setTenure, setTotalInterest, setPrincipalArray, setInterestArray, setBalanceArray} = useContext(CalculatorContext)


    // calculate EMI
    useEffect(()=>{

        let emiCal =Math.round(calculateEMI(amount, interest, tenure*12))
        setEmi(emiCal)

    },[amount, tenure, interest])


    useEffect(()=>{
        if(message === "Maximum amount allowed is 20000000" || message === "Max tenure allowed is 30yrs"  || message === "Maximum interest allowed is 20%"){
           const timerId = setTimeout(()=>{
                setMessage("")
            },1000)
            return () => {
                clearTimeout(timerId); // Clear the timeout if the component unmounts or if the message changes
            };
        }

    },[message])
    

    // LoanAmortization
    useEffect(()=>{
        if(emi !== undefined && emi !== ""){
            const {principals, interests, balances} = loanAmortization(amount, emi, tenure*12, interest)
            // console.log("check data rounding off values",principals, interests, balances)
            setPrincipalArray(principals)
            setInterestArray(interests)
            setBalanceArray(balances)
            let finalInterest = Math.round(interests.reduce((prev,elem)=> prev+elem))
            setTotalInterest(finalInterest)
        }
    },[amount, emi, tenure, interest])


    const handleAmount = useCallback((event) =>{
        let input = event.target.value
        setInputObj(event.target.id)
        setAmount(input)
        if(input < 25000 ){
            setMessage("Enter amount more than 25000")
        }
        else if(input>20000000){
            setMessage("Maximum amount allowed is 20000000")
            setAmount(20000000)
        }
        else{
            setMessage("")
        }
    },[amount])

    const handleTenure = (event) =>{
        console.log("inside handletenure")
        let input = event.target.value
        setInputObj(event.target.id)
        setTenure(input)
        if(input < 1 ){
            setMessage("Minimum tenure is 1yr")
        }
        else if(input>30){
            setMessage("Max tenure allowed is 30yrs")
            setTenure(30)
        }
        else if(message.length>0){
            setMessage("")
        }
    }

    const handleInterest = (event) =>{
        let input = event.target.value
        setInputObj(event.target.id)
        setInterest(input)
        if(input < 1 ){
            setMessage("Minimum interest is 1%")
        }
        else if(input>20){
            setMessage("Maximum interest allowed is 20%")
            setInterest(20)
        }
        else if(message.length>0){
            setMessage("")
        }
    }

    const handleSliderChange = (event) =>{
        let slider = event.target.id
        let sliderInput = event.target.value
       if(slider === "amountRange"){
        setAmount(sliderInput)
       }
       else if(slider === "tenureRange"){
        setTenure(sliderInput)
       }
       else if(slider === "interestRange"){
        setInterest(sliderInput)
       }
    }

    return (
        <div className="card-calculator">
            <div className="card-title">EMI Calculator</div>
            <div className="card-input">
                <div className="input-block">
                    <div className="input-group">
                        <label htmlFor="amount">Loan Amount</label>
                        <div className="number-input loan-amount">
                            <span>₹</span>
                            <input id="amountInput" onChange={handleAmount}  type="number" value={amount} />
                        </div>
                    </div>
                    <div className="range-slider">
                        <input id="amountRange" type="range" className="form-range" min="25000" max="20000000" value={amount}  onChange={handleSliderChange} ></input>
                        <div className="min-max-wrap">
                            <span className="limit">25000</span>
                            <span className="limit">20000000</span>
                        </div>
                    </div>
                    {message.length>0 && inputObj==="amountInput" && <p className="error-message">{message}</p> }
                </div>
            </div>
            <div className="card-input">
                <div className="input-block">
                    <div className="input-group">
                        <label htmlFor="amount">Loan Tenure (years)</label>
                        <div className="number-input tenure">
                            <input id="tenureInput" onChange={handleTenure} type="number" value={tenure} min="1" max="30">
                            </input>
                            <span>years</span>
                        </div>
                    </div>
                    <div className="range-slider">
                        <input id="tenureRange" type="range" className="form-range" min="1" max="30" value={tenure} onChange={handleSliderChange} ></input>
                        <div className="min-max-wrap">
                            <span className="limit">1yr</span>
                            <span className="limit">30yrs</span>
                        </div>
                    </div>
                    {message.length>0 && inputObj==="tenureInput" &&  <p className="error-message">{message}</p> }

                </div>
            </div>
            <div className="card-input">
                <div className="input-block">
                    <div className="input-group">
                        <label htmlFor="amount">Interest (% P.A)</label>
                        <div className="number-input tenure">
                            <input id="interestInput" onChange={handleInterest} type="number" value={interest} min="1" max="20">
                            </input>
                            <span>%</span>
                        </div>
                    </div>
                    <div className="range-slider">
                        <input id="interestRange" type="range" onChange={handleSliderChange} value={interest} className="form-range" min="1" max="20" step="1"></input>
                        <div className="min-max-wrap">
                            <span className="limit">1%</span>
                            <span className="limit">20%</span>
                        </div>
                    </div>
                    {message.length>0 && inputObj==="interestInput" && <p className="error-message">{message}</p> }
                </div>
            </div>
        </div>
    )


}

export default CardCalculator