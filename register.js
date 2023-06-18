document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.needs-validation');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      var emailInput = document.querySelector('input[type="email"]');
      var reEnterEmailInput = document.querySelector('input[placeholder="re-enter your email"]');
      var passwordInput = document.querySelector('input[type="password"]');
      var reEnterPasswordInput = document.querySelector('input[placeholder="re-enter your password"]');
  
      if (form.checkValidity()) {
        // Form is valid, perform registration or submit action
        console.log('Registration form submitted.');
        console.log('Email address:', emailInput.value);
        console.log('Re-entered email:', reEnterEmailInput.value);
        console.log('Password:', passwordInput.value);
        console.log('Re-entered password:', reEnterPasswordInput.value);
        // Replace the console.log statements with your desired registration functionality
        // For example, you can use AJAX to send the registration data to a server
      } else {
        // Form is invalid, display validation feedback
        form.classList.add('was-validated');
      }
    });
  });