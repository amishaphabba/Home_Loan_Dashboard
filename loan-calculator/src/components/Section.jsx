import { useState } from "react"

const Section = () => {

    const [faqToggle1, faqSetToggle1] = useState(false)
    const [faqToggle2, faqSetToggle2] = useState(false)
    const [faqToggle3, faqSetToggle3] = useState(false)

    const handleClick = (event) =>{
        if( event.target.id == "faq1"){
            faqSetToggle1(!faqToggle1)
        }
        else if( event.target.id == "faq2"){
            faqSetToggle2(!faqToggle2)
        }
        else if( event.target.id == "faq3"){
            faqSetToggle3(!faqToggle3)
        }
    } 
    return (
        <section className="faq-section">
            <div className="title">FAQ's</div>
            <div className="faq-container">
                <h3 id="faq1" onClick={handleClick}>What is a home loan calculator, and why is it necessary?</h3>
               {faqToggle1 && <div className="faq-content">
               <p>A home loan calculator is a free online tool that helps you estimate your monthly payments (EMIs) and total loan cost based on factors like:</p>
                <ul>
                    <li><span className="strong">Loan amount:</span> The amount you borrow from the lender.</li>
                    <li><span className="strong">Interest rate:</span> The rate charged on the loan amount.</li>
                    <li><span className="strong">Loan term:</span> The duration of the loan (usually in years).</li>
                </ul>
               </div>}
            </div>
            <div className="faq-container">
                <h3 id="faq2" onClick={handleClick} >Why You Need a Home Loan Calculator Before Buying Your Dream Home?</h3>
                {faqToggle2 && <div className="faq-content">
                <p>Owning a home is a significant life goal for many people. But before you jump into the house hunt, it's crucial to understand the financial implications, especially when it comes to a home loan. This is where a home loan calculator becomes your essential tool.</p>
                </div>}
            </div>
            <div className="faq-container">
                <h3 id="faq3" onClick={handleClick} >Here's why a home loan calculator is a must-have for every homebuyer:</h3>
                {faqToggle3 && <div className="faq-content">
                <ul className="ul-top">
                    <li>
                        <span className="strong">Empower informed decisions:</span> By estimating your EMIs and total loan cost, you can determine how much house you can comfortably afford. This prevents overstretching your finances and ensures you choose a home that aligns with your budget.
                    </li>
                    <li>
                        <span className="strong">Plan your finances effectively:</span>
                        Knowing your estimated EMIs allows you to factor in your housing expenses when creating a budget. This helps you manage your finances effectively and prioritize saving for a down payment.
                    </li>
                    <li>
                        <span className="strong">Compare loan options:</span> Many calculators allow you to adjust loan terms and interest rates. This lets you compare different loan options from various lenders and choose the one that offers the most favorable terms for you.
                    </li>
                    <li>
                        <span className="strong">Save time and effort:</span>
                        Gone are the days of tedious manual calculations! Home loan calculators provide instant results, saving you valuable time and effort.
                    </li>
                    <li>
                        <span className="strong">Gain peace of mind:</span>
                        By understanding the financial commitment involved, you can approach the home buying process with more confidence and clarity.
                    </li>
                </ul>
                </div>}
            </div>
        </section>
    )
}

export default Section