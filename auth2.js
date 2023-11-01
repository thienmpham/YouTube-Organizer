
require('dotenv').config();

const {google} = require('googleapis');

const clientSecret = process.env.CLIENT_SECRET;
const clientId = process.env.CLIENT_ID;
const redirectUrl = 'http://127.0.0.1:5500/YouTube-Organizer/popup.html';

console.log(clientSecret)
const oauth2Client = new google.auth.OAuth2(
  clientSecret,
  clientId,
  redirectUrl
);

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = [
  'https://www.googleapis.com/auth/youtube.readonly',
  'https://www.googleapis.com/auth/youtubepartner',
  'https://www.googleapis.com/auth/youtube',
  'https://www.googleapis.com/auth/youtube.force-ssl'
];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes
  
});

console.log(url)
