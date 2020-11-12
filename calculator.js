window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amount = document.querySelector("#loan-amount");
  amount.value = 120000;
  const years = document.querySelector("#loan-years");
  years.value = 30;
  const rate = document.querySelector("#loan-rate");
  rate.value = 0.04;
  
  // console.log(`loan amount: ${amount}`);   
  
  values = {"amount": amount, "years":years, "rate":rate};

  calculateMonthlyPayment(values);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let amount = document.querySelector("#loan-amount");
  let years = document.querySelector("#loan-years");
  let rate = document.querySelector("#loan-rate");
  
  // console.log(`loan amount: ${amount}`);   
  
  values = {"amount": amount, "years":years, "rate":rate};

  //calculate monthly payment
  let monthly = calculateMonthlyPayment(values);
  console.log(`monthly = ${monthly}`)

  //update UI
  updateMonthly(monthly)

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // console.log(values);
  // let amount = +(values.amount);
  // let rate = +(values.rate);
  // let years = +(values.years);

  // console.log(`amount = : ${amount}`);
  // console.log(`amount = : ${rate}`);
  // console.log(`amount = : ${years}`);

  // let monthlyPayment = (amount*rate);// /(1-Math.pow((1+v.rate), -v.years));
  // monthlyPayment = (Math.round(monthlyPayment*100))/100;
  // return monthlyPayment;

  return 1300;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    // document.querySelector("#monthly-payment").value = monthly;
    document.getElementById("monthly-payment") = monthly;
}
