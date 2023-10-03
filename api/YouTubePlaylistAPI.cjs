require('dotenv').config({path:'/Users/thienmpham/Documents/Coding/Projects/Chrome Extensions /YouTube-Organizer/.env'})

const apiKey = process.env.API_KEY; 

const baseUrl = 'https://youtube.googleapis.com/youtube/v3/playlists';
const part = 'snippet';
const channelId = 'UCt1sWh7fALveC7cI4oQ6ZMg'

const url = `${baseUrl}?part=${part}&channelId=${channelId}&key=${apiKey}`;

export async function getYTPlaylist() {

 fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error ('Network Response is not OK');
        }

        return response;
    }) .then((data) =>{
        console.log(playlists)
            
        
    })
};
// fetch(url)
// .then((data) => {
//     console.log(data)
// });