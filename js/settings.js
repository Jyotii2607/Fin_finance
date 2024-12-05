document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('settingsForm');
  
    // Simulate saving settings
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Collect form values
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const businessName = document.getElementById('businessName').value;
      const currency = document.getElementById('currency').value;
  
      // Display a confirmation message
      alert(`Settings Updated Successfully:
      Username: ${username}
      Email: ${email}
      Business Name: ${businessName}
      Preferred Currency: ${currency}`);
    });
  });
  