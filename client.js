const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.API_KEY; 

const baseUrl = 'https://youtube.googleapis.com/youtube/v3/playlists';
const part = 'snippet';
const channelId = 'UCt1sWh7fALveC7cI4oQ6ZMg'

const url = '${baseUrl}?part=${part}&channelId=${channelId}&key=${apiKey}';

// axios.get(url)
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.error('Error:', error);
// })

fetch(url)
.then((data) => {
    console.log(data)
});