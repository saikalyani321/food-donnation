function validateDonorSignup(event) {
    event.preventDefault();
  
    // Add your validation logic here
    // Check if the form data is valid, and handle accordingly
  
    // For example:
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const organization = document.getElementById('organization').value;
  
    if (password !== confirmPassword) {
      document.getElementById('signupError').innerText = 'Passwords do not match';
      return;
    }
  
    // Perform further validation as needed
  
    // If validation is successful, you can navigate to another page
    // For now, let's redirect to the "dashboard.html" page
    window.location.href = 'dashboard.html';
  }
  