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

// this is to retrieve the value of data-uwu from .choice class
type.forEach((item) => {
    item.addEventListener("click",() => {
        console.log(item.dataset.uwu);
    })
})

function calcM(){
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
    monthlyMortgageAmount = monthlyMortgageAmount.toFixed(2);
    const total = ((monthlyMortgageAmount*12)*timespan).toFixed(2);
    return {monthlyMortgageAmount,total};
}

calculate.addEventListener("click",() => {
    calcM();
})