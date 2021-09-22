// build a mortage calculator
// user input: loan amount, APR, loan duration
// program calculation: monthly interest rate and loan duration in months
// program output: monthly payment amount

const MESSAGES = require('./mortgage.json');
const readline = require('readline-sync');
const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
const regex2 = /[!"#$%&'()*+,-/:;<=>?@[\]^_`{|}~]/g;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

//function to remove punctuation and return trimmed string
function removePunc(input) {
  if (!input.match(regex)) {
    return input.trim();
  }
  return input.replace(regex, '').trim();
}

// function for valid loan amount
function isValidNumber(num) {
  return !Number.isNaN(Number(num));
}

// function for valid APR
function isValidAPR(aPR) {
  if (!aPR.match(regex2)) {
    return false;
  }
  return isValidNumber(aPR);
}

// function valid duration
function isValidDuration(duration) {
  if (duration.match(regex)) {
    return false;
  }
  return isValidNumber(duration);
}

let calculating = true;
prompt(MESSAGES["welcome"]);

// below in a while loop

while (calculating) {
  // get loanAmount
  prompt(MESSAGES["loanAmount"]);
  let loanAmount = removePunc(readline.question());
  while (!isValidNumber(loanAmount)) {
    prompt(MESSAGES["invalidAmount"]);
    loanAmount = removePunc(readline.question());
  }
  loanAmount = Number(loanAmount);

  // get apr
  prompt(MESSAGES["aPR"]);
  let aPR = readline.question();
  while (!isValidAPR(aPR)) {
    prompt(MESSAGES["invalidAPR"]);
    aPR = readline.question();
  }
  aPR = parseFloat(aPR);

  // get duration
  prompt(MESSAGES["loanDuration"]);
  let duration = readline.question();
  while (!isValidDuration(duration)) {
    prompt(MESSAGES["invalidDuration"]);
    duration = readline.question();
  }
  duration = Number(duration);

  // calculate result
  let monthlyInterest = (aPR / 12) / 100;
  let monthlyDuration = duration * 12;

  let monthlyPayment = (
    loanAmount * (monthlyInterest /
      (1 - Math.pow((1 + monthlyInterest), (-monthlyDuration)))));
  monthlyPayment = monthlyPayment.toFixed(2);
  let totalPayments = (monthlyPayment * monthlyDuration).toFixed(2);
  let totalInterest = (totalPayments - loanAmount).toFixed(2);

  prompt(`Here are your results:\nMonthly Payment: $${monthlyPayment} \
  \nTotal Payments: $${totalPayments}\nTotal Interest: $${totalInterest}`);

  prompt(MESSAGES["calculateAgain"]);

  let calculateAgain = readline.question();

  while (!['y', 'n'].includes(calculateAgain.toLowerCase())) {
    prompt(MESSAGES["yN"]);
    calculateAgain = readline.question();
  }

  if (calculateAgain.toLowerCase() === 'n') {
    prompt("Goodbye!");
    calculating = false;
  }
}