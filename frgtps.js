document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('button[type="button"]');
  
    button.addEventListener('click', function(event) {
      // Perform any necessary actions when the "Okay" button is clicked
      console.log('Okay button clicked');
      // Replace the console.log statement with your desired functionality
      // For example, you can redirect the user to the login page after password reset confirmation
      // by using the following code:
      // window.location.href = 'Login.html';
    });
  });