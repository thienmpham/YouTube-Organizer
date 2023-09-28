fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCt1sWh7fALveC7cI4oQ6ZMg&key=AIzaSyAoqOTuXLj1J8KFsTnz3tjE97dKO6ppPIY')
.then((data) => {
    console.log(data.json())
});