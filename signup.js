document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.needs-validation');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      var firstNameInput = document.querySelector('input[placeholder="First name"]');
      var middleNameInput = document.getElementById('email2');
      var lastNameInput = document.querySelector('input[placeholder="Last name"]');
      var phoneNumberInput = document.querySelector('input[placeholder="Phone number"]');
      var emailInput = document.querySelector('input[type="email"]');
      var homeAddressInput = document.querySelector('input[placeholder="Home address"]');
      var genderInputs = document.querySelectorAll('input[name="name"]');
      var otherGenderInput = document.querySelector('input[placeholder="If others, specify"]');
  
      if (form.checkValidity()) {
        // Form is valid, perform signup or submit action
        console.log('Signup form submitted.');
        console.log('First name:', firstNameInput.value);
        console.log('Middle name:', middleNameInput.value);
        console.log('Last name:', lastNameInput.value);
        console.log('Phone number:', phoneNumberInput.value);
        console.log('Email address:', emailInput.value);
        console.log('Home address:', homeAddressInput.value);
  
        var selectedGender = '';
        genderInputs.forEach(function(input) {
          if (input.checked) {
            selectedGender = input.id;
          }
        });
  
        console.log('Gender:', selectedGender);
        console.log('Other gender:', otherGenderInput.value);
        // Replace the console.log statements with your desired signup functionality
        // For example, you can use AJAX to send the signup data to a server
      } else {
        // Form is invalid, display validation feedback
        form.classList.add('was-validated');
      }
    });
  
    var genderInputs = document.querySelectorAll('input[name="name"]');
    var otherGenderInput = document.querySelector('input[placeholder="If others, specify"]');
  
    genderInputs.forEach(function(input) {
      input.addEventListener('change', function() {
        if (input.id === 'gender3' && input.checked) {
          otherGenderInput.style.display = 'block';
        } else {
          otherGenderInput.style.display = 'none';
        }
      });
    });
  });