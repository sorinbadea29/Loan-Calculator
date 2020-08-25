document.getElementById('loan-form').addEventListener('submit', function(e){
  e.preventDefault();
  // Hide results
  document.getElementById('results').style.display = 'none';
  // Show loading
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculateResults, 500);
});

function calculateResults(){
  console.log('calculating');
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) /100 /12;
  const calculatePayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculateInterest, calculatePayments);
  const monthly = (principal*x*calculateInterest)/(x-1);
  
  // Show results
  document.getElementById('results').style.display = 'block';
  // Hide loading
  document.getElementById('loading').style.display = 'none';

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = ((monthly * calculatePayments)-principal).toFixed(2);
  }else{
    showError('Please check your numbers');
  };

  function showError(error){
    // Hide results
    document.getElementById('results').style.display = 'none';
    // Hide loading
    document.getElementById('loading').style.display = 'none';

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    const errorDiv = document.createElement('div');
    errorDiv.appendChild(document.createTextNode(error));
    errorDiv.className = 'alert alert-danger';
    card.insertBefore(errorDiv, heading);
    setTimeout(() => errorDiv.remove(), 3000);

    // or

    // setTimeout(clearError(), 3000);
  };
  // function clearError(){
  //   document.querySelector('.alert').remove();
  // }
};






