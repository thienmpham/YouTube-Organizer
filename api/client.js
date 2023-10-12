// Fetching data from my endpoint to my client side 
fetch('http://localhost:8000/api')
    .then(res => {
        res.json()
    })
    .then(data => {
        console.log(data);
    }).catch (error => {
        (console.log(error))
    });
    
    