const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.API_KEY; 

const baseUrl = 'https://youtube.googleapis.com/youtube/v3/playlists';
const part = 'snippet';
const channelId = 'UCt1sWh7fALveC7cI4oQ6ZMg'

const url = `${baseUrl}?part=${part}&channelId=${channelId}&key=${apiKey}`;
console.log(url);

 fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error ('Network Response is not OK');
        }

        return response;
    }) .then((data) =>{
        console.log(data)
            console.log(data.items)
        
    })

// fetch(url)
// .then((data) => {
//     console.log(data)
// });