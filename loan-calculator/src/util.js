// Function to calculate monthly EMI for given loan amount, interest rate and tenure
export function calculateEMI(amount, interest, tenure) {
    const p = amount;
    const r = interest;
    const n = tenure;
    if (p >= 25000 && r >= 1 && n >= 1) {
        const actualRate = r / 12 / 100;
        const months = tenure;
        return p * actualRate * (Math.pow(1 + actualRate, months) / (Math.pow(1 + actualRate, months) - 1))
    }
    return 0;
}

// Function to return monthly stats for a loan
// Given loan amount, interest rate, montly EMI and tenure, the method returns data for monthly
// principal repayment, interest payment and remaining loan
export function loanAmortization(amount, emi, tenure, interest) {
    const months = tenure;
    let principals = [];
    let interests = [];
    let balances = [amount];

    for (let i = months; i > 0; i--) {
        principals.push(emi - (balances[balances.length - 1] * (interest / 12 / 100)));
        interests.push(emi - (principals[principals.length - 1]));
        balances.push(balances[balances.length - 1] - principals[principals.length - 1]);

    }
    return { principals, interests, balances };
}


// Function to calculate table data
// returns array to populate table data
export const calculateYearValues = (inputArrays, tenureForFirstYear)=> {
    const extractedData = {
        interest: [],
        principal: [],
        balance: [],
        monthlyInterest:[],
        monthlyPrincipal:[],
        monthlyBalance:[]
    };

    inputArrays.forEach((inputArray, index) => {

        let arrayValue1=0
        // slicing values for first year
        const nDataPoints = inputArray.slice(0, tenureForFirstYear)
        const newDataPoints = nDataPoints.map((elem)=> Math.round(elem))
        if(index === 2){ //checking for balance 
            extractedData.monthlyBalance.push(newDataPoints)
            extractedData.balance.push(Math.round(inputArray[tenureForFirstYear-1]))
        }
        else{
            arrayValue1 = Math.round(nDataPoints.reduce((prev, curr) => prev + curr));

            if(index === 0){ //checking for interest
                extractedData.monthlyInterest.push(newDataPoints)
                extractedData.interest.push(arrayValue1)
            }
            else if(index === 1){    //checking for principal
                extractedData.monthlyPrincipal.push(newDataPoints)
                extractedData.principal.push(arrayValue1)
            }
        }

        const remainingMonths = 12-tenureForFirstYear
        // Setting Last Index for extracting data for last tenure
        let lastIndex = tenureForFirstYear
        let lengthOfArray = inputArray.length

        // slicing values for reamining tenure
        for (let i = tenureForFirstYear; i < lengthOfArray-remainingMonths; i += 12) {
            let arrayValue = 0;
            lastIndex =i+12
            const nDataPoints = inputArray.slice(i, i + 12);
            const newDataPoints = nDataPoints.map((elem)=> Math.round(elem))
            if (index === 2) {  //checking for balance array
                extractedData.monthlyBalance.push(newDataPoints)
                arrayValue = Math.round(nDataPoints[11]);
                extractedData.balance.push(arrayValue)
            } else {
                arrayValue = Math.round(nDataPoints.reduce((prev, curr) => prev + curr));
              
                if (index === 0) {       //checking for interest array
                    extractedData.monthlyInterest.push(newDataPoints)
                    extractedData.interest.push(arrayValue);
                } 
                else if (index === 1) {  //checking for principal array
                    extractedData.monthlyPrincipal.push(newDataPoints)
                    extractedData.principal.push(arrayValue);
                }
            }
        }

        // slicing values for last year
        let arrayValue2=0
        if(index === 2){ //checking for balance
            const nDataPoints = inputArray.slice(lastIndex, lengthOfArray-1)
            nDataPoints.push(0)
            extractedData.monthlyBalance.push(nDataPoints.map((elem)=> Math.round(elem)))
            // console.log("check data rounding off ---", nDataPoints)
            extractedData.balance.push(0)
        }
        else{
            const nDataPoints = inputArray.slice(lastIndex)
            arrayValue2 = Math.round(nDataPoints.reduce((prev, curr) => prev + curr));

            if(index === 0){ //checking for interest
                extractedData.monthlyInterest.push(nDataPoints.map((elem)=> Math.round(elem)))
                extractedData.interest.push(arrayValue2)
            }
            else if(index === 1){    //checking for principal
                extractedData.monthlyPrincipal.push(nDataPoints.map((elem)=> Math.round(elem)))
                extractedData.principal.push(arrayValue2)
            }
        }

    });

    return extractedData;
};
