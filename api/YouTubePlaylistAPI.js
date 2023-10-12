require('dotenv').config({path:'/Users/thienmpham/Documents/Coding/Projects/Chrome Extensions /YouTube-Organizer/.env'})
const cors = require('cors')


const axios = require('axios')
const express = require('express');
const app = express();
app.use(cors());
const port = 8000;

const apiKey = process.env.API_KEY; 
const baseUrl = 'https://youtube.googleapis.com/youtube/v3/playlists';
const part = 'snippet';
const channelId = 'UCt1sWh7fALveC7cI4oQ6ZMg';
const url = `${baseUrl}?part=${part}&channelId=${channelId}&key=${apiKey}`;
app.listen(port, () => console.log(`Server has started on ${port}`))

app.get('/', (req, res) => res.json('Hello World'))

var obj;

// Fetching playlist data from YouTube API 
fetch(url)
    .then((res) => res.json()) // convert response into json format
    .then(data => {
        obj = data;   
    }) 
    .then (() => {
        console.log(obj);
    })
    
// Send fetch results to /api endpoint 
// using express
app.get('/api', (req, res) => {
    res.json(obj);
    

     })





