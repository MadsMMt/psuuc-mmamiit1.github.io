document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the form element
    var form = document.querySelector('.needs-validation');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      var emailInput = document.getElementById('email');
      var passwordInput = document.getElementById('password');
      var rememberCheckbox = document.getElementById('check');
  
      if (form.checkValidity()) {
        // Form is valid, perform login or submit action
        console.log('Login form submitted.');
        console.log('Email:', emailInput.value);
        console.log('Password:', passwordInput.value);
        console.log('Remember me:', rememberCheckbox.checked);
        // Replace the console.log statements with your desired login functionality
        // For example, you can use AJAX to send the login data to a server
      } else {
        // Form is invalid, display validation feedback
        emailInput.classList.add('is-invalid');
        passwordInput.classList.add('is-invalid');
      }
    });
  
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
  
    emailInput.addEventListener('input', function() {
      emailInput.classList.remove('is-invalid');
    });
  
    passwordInput.addEventListener('input', function() {
      passwordInput.classList.remove('is-invalid');
    });
  });