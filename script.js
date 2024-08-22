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
const resultContainer = document.querySelector(".resultContainer");
let mode;
const uwumonthly = document.querySelector(".uwumonthly");
const uwutotal = document.querySelector(".uwutotal");
const showresult = document.querySelector(".showResult");
const showResultInterestOnly = document.querySelector(".showResultInterestOnly");
const uwuYear = document.querySelector(".uwuYear");
const uwuInterest = document.querySelector(".uwuInterest");

// this makes sure that mode is always the checked type
type.forEach((item) => {
    if(item.checked === true){
        if(item.dataset.choice === "repayment"){
            mode = "repayment";
        }else{
            mode = "interest";
        }
    }
})


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
    
    if(target === "Escape"){
        clear.click();
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
    monthlyMortgageAmount = monthlyMortgageAmount.toFixed(2); //this is monthly repayments
    const total = ((monthlyMortgageAmount*12)*timespan).toFixed(2); //this is total repayment after interest
    const interestOnly = total-principal; //this is the extra money that will be payed on top of mortgage amount

    if(mode === "repayment"){
        return {monthlyMortgageAmount,total}
    }else{
        return {interestOnly};
    }
}

// calculate button logic
calculate.addEventListener("click",() => {
   const obj = calc(mode);
   if(mode === "repayment"){
        resultContainer.classList.add("hide");
        showResultInterestOnly.classList.add("hide");
        showresult.classList.remove("hide");
        uwumonthly.textContent = obj.monthlyMortgageAmount;
        uwutotal.textContent = obj.total;
   }else{
        resultContainer.classList.add("hide");
        showresult.classList.add("hide")
        showResultInterestOnly.classList.remove("hide");
        uwuYear.textContent = termValue.value;
        uwuInterest.textContent = obj.interestOnly;
   }
})
