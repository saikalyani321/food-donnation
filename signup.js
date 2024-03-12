function validateSignup(event) {
    event.preventDefault();
  
    const userType = document.getElementById('userType').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;
  
    // Basic validation
    if (userType === '' || username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || email.trim() === '' || mobile.trim() === '' || address.trim() === '') {
      document.getElementById('signupError').innerText = 'All fields are required';
      return;
    }
  
    if (password !== confirmPassword) {
      document.getElementById('signupError').innerText = 'Passwords do not match';
      return;
    }
  
    // Additional logic based on user type
    if (userType === 'donor') {
      // Handle donor signup
      console.log('Signing up as a donor...');
    } else if (userType === 'receiver') {
      // Handle receiver signup
      console.log('Signing up as a receiver...');
    } else if (userType === 'deliveryBoy') {
      // Handle delivery boy signup
      console.log('Signing up as a delivery boy...');
    }
  
    // Your signup logic here (e.g., send data to server)
    // For simplicity, let's assume the signup is successful
    window.location.href = 'login.html';
  }
  