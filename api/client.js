let div = document.createElement('div');
let h1 = document.createElement('h1');
let tabName = document.querySelector('.tab-name');
let tabNameSpan = document.querySelector('#tab-name-span')


// Select the tab div 
const videoTab = document.querySelector('.video-tab');
console.log(videoTab)

// Create node clone of tab div 
// let videoTabClone = videoTab.cloneNode(true);
 // Assign class so I can target the cloned div whenever neccessary 
//  videoTabClone.id = 'videoClone';
// let tabNameSpanClone = document.querySelector('.videoTabClone#tab-name-span')
// console.log(tabNameSpanClone);

// Select <main> 
const main = document.querySelector('#main');




// Fetching data from my endpoint to my client side 
fetch('http://localhost:8000/api')
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
        
        let playlists = data.items;
        
        console.log(data.pageInfo.totalResults)
        console.log(data.nextPageToken)
        for (let i = 0; i < playlists.length; i++) { 
            // Create a node clone with each iteration 
            videoTabClone = videoTab.cloneNode(true);
            
            
            // Append empty div to cloned div 
            main.append(videoTabClone);     
            videoTabClone.id = 'videoClone' + `${i + 1}`;

            tabNameSpan.innerHTML = playlists[i].snippet.title;
            console.log(playlists[i].snippet.title)
            
        }
   
    }).catch (error => {
        (console.log(error));
    });
    
