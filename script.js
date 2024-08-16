const theme = document.querySelector(".theme");
const themeName = document.querySelector(".themeName");
const main = document.querySelector(".main");


// changes theme of the page
theme.addEventListener("click",() => { 
    document.documentElement.classList.toggle("dark");
    if(document.documentElement.className === "dark"){
        themeName.textContent = "Dark ";
    }else{
        themeName.textContent = "Light ";
    }
})


// let principal = prompt("Enter total amount of loan");
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
