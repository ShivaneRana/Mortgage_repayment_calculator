let principal = prompt("Enter total amount of loan");
let anualInterestRate = prompt("Enter anual interest rate")/100;
let timespan = prompt("Enter mortgage timespan");

const numberOfPayment = timespan*12;
const monthlyInterestRate = anualInterestRate/12;

let numerator;
let denominator;

numerator = monthlyInterestRate*Math.pow((1+monthlyInterestRate),numberOfPayment);
denominator = Math.pow((1+monthlyInterestRate),numberOfPayment)-1;

const monthlyMortgageAmount = principal*(numerator/denominator);
alert(monthlyMortgageAmount.toFixed(2));
