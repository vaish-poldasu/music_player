const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Memories",
    name: "Maroon 5",
    source: "songs/Song1.mp3",
    youtube: "https://youtu.be/SlPhMPnQ58k?si=YYT0cfsE8ZadRDeQ"
  },
  {
    title: "A Thousand Years",
    name: "Christina Perri",
    source: "songs/Song2.mp3",
    youtube: "https://youtu.be/rtOvBOTyX00?si=aiwNWiqrgcmWyvw4"
  },
  {
    title: "Cheap Thrills",
    name: "Sia ft.Sean Paul",
    source: "songs/Song3.mp3",
    youtube: "https://youtu.be/nYh-n7EOtMA?si=82G2FdHlwKpMSCev"
  },
  {
    title: "Perfect",
    name: "Ed Sheeran",
    source: "songs/Song4.mp3",
    youtube: "https://youtu.be/2Vv-BfVoq4g?si=1ViY9GMyAj3jKErN"
  },
  {
    title: "Cheri Cheri Lady",
    name: "Modern Talking",
    source: "songs/Song5.mp3",
    youtube: "https://youtu.be/eNvUS-6PTbs?si=rFDfSc8wFaE88YH1"
  },
  {
    title: "Levitating",
    name: "Dua Lipa",
    source: "songs/Song6.mp3",
    youtube: "https://youtu.be/TUVcZfQe-Kw?si=nKELt9-PpnHNTd3Q"
  },
  {
    title: "Delicate",
    name: "Taylor Swift",
    source: "songs/Song7.mp3",
    youtube: "https://www.youtube.com/watch?v=tCXGJQYZ9JA&ab_channel=TaylorSwiftVEVO"
  }
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  // Opening corresponding YouTube link
  window.open(songs[currentSongIndex].youtube, "_blank");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  pauseSong(); 
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  pauseSong(); 
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward"
  }
});
