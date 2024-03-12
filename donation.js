function makeDonation(event) {
    event.preventDefault();
  
    // Add your logic to handle the donation form submission
    // Retrieve data from the form
    const foodType = document.getElementById('foodType').value;
    const quantity = document.getElementById('quantity').value;
  
    // Perform further actions, e.g., send donation data to the backend
  
    // For now, let's log the donation data to the console
    console.log('Donation Data:', { foodType, quantity });
  
    // You can also update the UI to show a success message or redirect the user
  }
  function showError(message) {
    const errorElement = document.getElementById('signupError');
    errorElement.innerText = message;
  }
  