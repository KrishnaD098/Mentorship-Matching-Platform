// auth.js
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  // Login Form Submission
  if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const email = loginForm.querySelector('input[name="email"]').value;
          const password = loginForm.querySelector('input[name="password"]').value;

          // Perform login API request or validation
          loginUser(email, password);
      });
  }

  // Registration Form Submission
  if (registerForm) {
      registerForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const username = registerForm.querySelector('input[name="username"]').value;
          const email = registerForm.querySelector('input[name="email"]').value;
          const password = registerForm.querySelector('input[name="password"]').value;

          // Perform registration API request or validation
          registerUser(username, email, password);
      });
  }
});

function loginUser(email, password) {
  console.log('Logging in:', email, password);
  // Add your logic here to send data to backend
}

function registerUser(username, email, password) {
  console.log('Registering user:', username, email, password);
  // Add your logic here to send data to backend
}
