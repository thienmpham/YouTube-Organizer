let div = document.createElement('div');
let h1 = document.createElement('h1');
let tabName = document.querySelector('.tab-name');
let tabNameSpan = document.querySelector('#tab-name-span')

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
        console.log(data);
        
        let playlists = data.items;
        
        
        for (let i = 0; i < playlists.length; i++) { 
            // Create a node clone with each iteration 
            videoTabClone = videoTab.cloneNode(true);
            // Append empty div to cloned div 
            main.append(videoTabClone);
            

            // tabName = '';
            // h1.innerHTML = playlists[i].snippet.title;
            // tabName.append(div);
            tabNameSpan.innerHTML = playlists[i].snippet.title;
            console.log(tabName);
            // tabName.replaceWith(playlists[i].snippet.title);
 
            console.log(playlists[i].snippet.title)
                 
        }
   
    }).catch (error => {
        (console.log(error));
    });
    
