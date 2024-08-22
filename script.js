const mortgageAmount = document.querySelector(".second"); //this is for amount div not input
const mortgageTerm = document.querySelector(".third1"); //this is for term div not input
const mortgageInterest = document.querySelector(".third2"); //this is for rate div no input
const principalValue = document.querySelector(".principal"); //mortgage amount input
const termValue = document.querySelector(".term"); //mortgage term input
const interestValue = document.querySelector(".interest"); //mortgage interest input
const type = document.querySelectorAll(".choice"); //mortgage type input
const calculate = document.querySelector(".submit"); //this is for calculate button
const result = document.querySelector(".result"); //this is for result div
const clear = document.querySelector(".clear");
let mode = "repayment";

// for finding which option has been picked
type.forEach((item) => {
    item.addEventListener("click", () => {
        mode = item.dataset.choice;
        console.log(mode);
    })
})

document.addEventListener("keydown", (e) => {
    let target = e.key;
    if(target === "Enter"){
        calculate.click();
    }
})

// this calculate the monthly repayment and total repayment
function calc(mode){
    let principal = principalValue.value;
    let anualInterestRate = interestValue.value/100;
    let timespan = termValue.value;

    const numberOfPayment = timespan*12;
    const monthlyInterestRate = anualInterestRate/12;

    let numerator;
    let denominator;

    // calculation for monthly repayement 
    numerator = monthlyInterestRate*Math.pow((1+monthlyInterestRate),numberOfPayment);
    denominator = Math.pow((1+monthlyInterestRate),numberOfPayment)-1;
    let monthlyMortgageAmount = principal*(numerator/denominator);

    // all the results
    monthlyMortgageAmount = monthlyMortgageAmount.toFixed(2);
    const total = ((monthlyMortgageAmount*12)*timespan).toFixed(2);
    const interestOnly = total-principal;

    if(mode === "repayment"){
        return {monthlyMortgageAmount,total}
    }else{
        return {interestOnly};
    }
}

// calculate button logic
calculate.addEventListener("click",() => {
   const obj = calc(mode);
   result.textContent = "";
   if(mode === "repayment"){
    console.log(`Monthly Repayment: ${obj.monthlyMortgageAmount}`);
    console.log(`You have to Repay totally: ${obj.total}`)
   }else{
    console.log(`You have to repay an extra: ${obj.interestOnly}`);
   }
})
