// Fill in your client ID and client secret that you obtained
// while registering the application
const clientID = 'eb4e66a3cf4256fc45d1';
const clientSecret = '5e65ebcbf381a7161aab657e861798c172164c60';

const express = require('express');
const path = require('path');
const axios = require('axios');
const https = require('https')

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/oauth/redirect', async (req, res) => {
  const authorizationCode = req.query.code;
  console.log('authorization code:', authorizationCode);

  const tokenResponse = await axios({
    method: 'post',
    url: 'https://github.com/login/oauth/access_token?' +
      `client_id=${clientID}&` +
      `client_secret=${clientSecret}&` +
      `code=${authorizationCode}&` +
      `redirect_uri=http://localhost:8080/oauth/redirect`,
    headers: {
      accept: 'application/json'
    }
  });

  const accessToken = tokenResponse.data.access_token;
  console.log(`access token: ${accessToken}`);

  const result = await axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      accept: 'application/json',
      Authorization: `token ${accessToken}`
    }
  });
  console.log(result.data);
  const name = result.data.name;

  res.redirect(`/welcome.html?name=${name}`);
});

const server = app.listen(8080, () => {
  console.log(`Express server listening on port ${server.address().port}`);
});
