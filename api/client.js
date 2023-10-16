let div = document.createElement('div');

// Select the tab div 
const videoTab = document.querySelector('.video-tab');
console.log(videoTab)

// Create node clone of tab div 
let videoTabClone = videoTab.cloneNode(true);
console.log(videoTabClone);
// Assign class so I can target the cloned div whenever neccessary 
videoTabClone.id = 'videoClone';
// Select <main> 
const main = document.querySelector('#main');




// let appendVideoTab = () => {
//     //add empty div to <main>
//     main.append(div);
//     // Append empty div to cloned div 
//     div.append(videoTabClone);
//     console.log(div)
// }



// Fetching data from my endpoint to my client side 
fetch('http://localhost:8000/api')
    .then(res => {
        return res.json();
    })
    .then(data => {
        let playlists = data.items; 
        console.log(data);
        
        let tabName = document.querySelector('.tab-name');
        for (var playlist of playlists) {
            console.log(playlist)
        }       
        console.log(playlist.snippet.title)
        for (let i = 0; i < playlists.length; i++) { 
            // Create a node clone with each iteration 
            let videoTabClone = videoTab.cloneNode(true);
            // Append empty div to cloned div 
            main.append(videoTabClone);
            tabName.replaceWith(`${playlist.snippet.title}`)

            
        }
        console.log(data);
    }).catch (error => {
        (console.log(error));
    });
    
