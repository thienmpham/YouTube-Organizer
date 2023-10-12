let div = document.createElement('div');
// Select the tab div 
const videoTab = document.querySelector('.video-tab');

// Create node clone of tab div 
let videoTabClone = videoTab.cloneNode(true);
console.log(videoTabClone);

videoTab.append(div);
div.append(videoTabClone);


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
    
    