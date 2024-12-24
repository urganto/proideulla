const express = require('express');
const app = express();
const querystring = require('querystring');
const axios = require('axios');

app.get('/login', (req, res) => {
  const clientId = 'YOUR_CLIENT_ID';
  const redirectUri = 'YOUR_REDIRECT_URI';
  const scope = 'user-library-read,user-library-modify';
  const state = 'YOUR_STATE';

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}&state=${state}&show_dialog=true`;

  res.redirect(authUrl);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
