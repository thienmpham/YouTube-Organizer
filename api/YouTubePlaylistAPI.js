require('dotenv').config({path:'/Users/thienmpham/Documents/Coding/Projects/Chrome Extensions /YouTube-Organizer/.env'})

const axios = require('axios')
const express = require('express');
const app = express();
const port = 8000;

const apiKey = process.env.API_KEY; 
const baseUrl = 'https://youtube.googleapis.com/youtube/v3/playlists';
const part = 'snippet';
const channelId = 'UCt1sWh7fALveC7cI4oQ6ZMg';
const url = `${baseUrl}?part=${part}&channelId=${channelId}&key=${apiKey}`;
app.listen(port, () => console.log(`Server has started on ${port}`))

app.get('/', (req, res) => res.json('Hello World'))


const fetchData = (handler) => {
    fetch(url)
    .then((res) => res.json()) // convert response into json format
    .then(data => {
        var a = [];
        a.push(data);
        handler(a);
      
    }) 
}
console.log(handler)

app.get('/api', (req, res) => {

    // fetch(url)
        // .then((res) => res.json()) // convert response into json format
        // .then((res) => console.log(res))
        // .then((res) => res.send(obj))
        // .catch (error => console.log(error));

    
   
     })





