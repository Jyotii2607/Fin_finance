// Handle sign-in form submission
const signinForm = document.getElementById('signinForm');

signinForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      alert(error.message || 'Login failed!');
      return;
    }

    const data = await response.json();
    localStorage.setItem('token', data.token); // Save token for future requests
    alert('Login successful!');
    window.location.href = 'dashboard.html'; // Redirect to dashboard
  } catch (error) {
    alert('An error occurred. Please try again later.');
    console.error(error);
  }
});
