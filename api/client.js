let div = document.createElement('div');

// Select the tab div 
const videoTab = document.querySelector('.video-tab');
console.log(videoTab)

// Create node clone of tab div 
let videoTabClone = videoTab.cloneNode(true);
console.log(videoTabClone);

// Select <main> 
const main = document.querySelector('#main');


// Assign class so I can
// target the cloned div whenever neccessary 
videoTabClone.id = 'videoClone';

//add empty div to <main>
main.append(div);
// Append empty div to cloned div 
div.append(videoTabClone);
console.log(div)



// Fetching data from my endpoint to my client side 
fetch('http://localhost:8000/api')
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    }).catch (error => {
        (console.log(error));
    });
    
    