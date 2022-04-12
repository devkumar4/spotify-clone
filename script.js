console.log("welcome to spotify");


let songIndex = 0;
let audioElement = new Audio('songs/3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName')
let songitem = Array.from(document.getElementsByClassName('songitem'));


let songs = [
    { songName: "Friends", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },


    { songName: "love-me-like-you-do", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Desires", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "friends", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Harleys in hawai", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Humnava Mere", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "One Night Direction", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Chale ana", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },



]
songitem.forEach((Element, i) => {

    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;


    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate')

    Progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myProgressBar.value = Progress;
});




myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
        Element.classList.add('fa-circle-play');
        Element.classList.remove('fa-circle-pause');

    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
    Element.addEventListener('click', (e) => {

        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex - 1].songName
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');



    })

})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0

    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex }.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');


})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0

    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');


})