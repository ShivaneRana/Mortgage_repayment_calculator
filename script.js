// `let principal = prompt("Enter total amount of loan");
// let anualInterestRate = prompt("Enter anual interest rate")/100;
// let timespan = prompt("Enter mortgage timespan");

// const numberOfPayment = timespan*12;
// const monthlyInterestRate = anualInterestRate/12;

// let numerator;
// let denominator;

// // calculation for monthly repayement 
// numerator = monthlyInterestRate*Math.pow((1+monthlyInterestRate),numberOfPayment);
// denominator = Math.pow((1+monthlyInterestRate),numberOfPayment)-1;
// const monthlyMortgageAmount = principal*(numerator/denominator);
// alert(monthlyMortgageAmount.toFixed(2));

const mortgageAmount = document.querySelector(".second"); //this is for amount div not input
const mortgageTerm = document.querySelector(".third1"); //this is for term div not input
const mortgageInterest = document.querySelector(".third2"); //this is for rate div no input
