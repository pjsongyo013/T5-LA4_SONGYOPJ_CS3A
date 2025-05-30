const users = [
      { username: 'user1', password: 'pass123' },
      { username: 'admin', password: 'adminpass' }
    ];

    const form = document.getElementById('loginForm');
    const errorDiv = document.getElementById('error');

    form.addEventListener('submit', e => {
      e.preventDefault();
      errorDiv.textContent = '';

      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value;

      const user = users.find(u => u.username === username && u.password === password);

      if(user) {
        sessionStorage.setItem('loggedInUser', username);
        window.location.href = 'loggedIn.html'; // Redirect to success page
      } else {
        errorDiv.textContent = 'Invalid username or password.';
      }
    });

    function getUsers() {
      const usersJSON = localStorage.getItem('users');
      return usersJSON ? JSON.parse(usersJSON) : [];
    }


    function saveUsers(users) {
      localStorage.setItem('users', JSON.stringify(users));
    }

    const signUpForm = document.getElementById('signUpForm');
    const Div = document.getElementById('error');
    const successDiv = document.getElementById('success');

    signUpForm.addEventListener('submit', e => {
      e.preventDefault();
      errorDiv.textContent = '';
      successDiv.textContent = '';

      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value;

      const users = getUsers();

      if(users.find(u => u.username.toLowerCase() === username.toLowerCase())) {
        errorDiv.textContent = "Username already exists.";
        return;
      }

      users.push({ username, password });
      saveUsers(users);

      successDiv.textContent = 'Sign up successful! Redirecting to login...';

      setTimeout(() => {
        window.location.href = 'logIn.html';
      }, 2000);
    });