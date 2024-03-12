function validateDonorSignup(event) {
    event.preventDefault();
  
    // Retrieve form input values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const organization = document.getElementById('organization').value.trim();
  
    // Validation logic
    if (fullName === '' || email === '' || password === '' || confirmPassword === '' || organization === '') {
      showError('All fields must be filled out');
      return;
    }
  
    if (!isValidEmail(email)) {
      showError('Invalid email address');
      return;
    }
  
    if (!isStrongPassword(password)) {
      showError('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit.');
      return;
    }
  
    if (password !== confirmPassword) {
      showError('Passwords do not match');
      return;
    }
  
    // Additional validation logic as needed...
  
    // If all validation passes, you can proceed with signup
    // For now, let's simulate a successful signup and redirect to "donation.html"
    alert('Signup successful! Redirecting to donation page...');
    window.location.href = 'donation.html';
  }
  
  function showError(message) {
    const errorElement = document.getElementById('signupError');
    errorElement.innerText = message;
  }
  
  function isValidEmail(email) {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isStrongPassword(password) {
    // Password criteria: at least 8 characters, one uppercase, one lowercase, and one digit
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  }
  
  