document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.needs-validation');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      var emailInput = document.querySelector('input[type="email"]');
  
      if (form.checkValidity()) {
        // Form is valid, perform password reset action
        console.log('Password reset initiated.');
        console.log('Email address:', emailInput.value);
        // Replace the console.log statements with your desired password reset functionality
        // For example, you can send a password reset email to the provided email address
      } else {
        // Form is invalid, display validation feedback
        form.classList.add('was-validated');
      }
    });
  });