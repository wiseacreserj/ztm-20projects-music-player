const image = document.querySelector("img");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const music = document.querySelector("audio");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const playBtn = document.querySelector("#play");

//Music

const songs = [
    {
        name: "jacinto-1",
        displayName: "Electric Chill Machine",
        artist: "Jacinto Design",
    },
    {
        name: "jacinto-2",
        displayName: "Seven Nation Army (Remix)",
        artist: "Jacinto Design",
    },
    {
        name: "jacinto-3",
        displayName: "The Rocks",
        artist: "Jacinto Design",
    },
    {
        name: "metric-1",
        displayName: "Guitar Jam",
        artist: "Jacinto Design",
    },
];

//
let isPlaying = false;

//Play

const playSong = () => {
    music.play();
    isPlaying = true;
    playBtn.classList.replace("fa-play", "fa-pause");
    playBtn.setAttribute("title", "Pause");
};

//Pause

const pauseSong = () => {
    music.pause();
    isPlaying = false;
    playBtn.classList.replace("fa-pause", "fa-play");
    playBtn.setAttribute("title", "Play");
};

//Play of Pause event listener

playBtn.addEventListener("click", () => {
    isPlaying ? pauseSong() : playSong();
});

//Update DOM

const loadSong = (song) => {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
};
//Current Song
let songIndex = 0;

//Next Song
const prevSong = () => {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
};

//Next Song
const nextSong = () => {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
};

//On Load - select first song
loadSong(songs[songIndex]);

//Event Listeners
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
