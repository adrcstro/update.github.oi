// Get the button element
const resetButton = document.querySelector('.red-button');

// Add event listener to the button
resetButton.addEventListener('click', function() {
  // Get all input elements
  const inputs = document.querySelectorAll('input[type="text"]');
  
  // Loop through each input and reset its value
  inputs.forEach(function(input) {
    input.value = '';
  });
});


 document.addEventListener('DOMContentLoaded', function() {
    var refreshButton = document.querySelector('.refresh-button');

    refreshButton.addEventListener('click', function() {
      location.reload();
    });
  });