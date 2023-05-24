const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const songs = ['Pavel_pikovsky_Menyai'];
let songIndex = 0;
loadSong(songs[songIndex]);
const loadSong = (song) => {
  title.innerText = song;
  audio.src = `./music/${song}.mp3`;
};
const playSong = () => {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fa').classList.remove('fa-play');
  playBtn.querySelector('i.fa').classList.add('fa-pause');
  audio.play();
};
const pauseSong = () => {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fa').classList.add('fa-play');
  playBtn.querySelector('i.fa').classList.remove('fa-pause');
  audio.pause();
};
const prevSong = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
};
const nextSong = () => {
  songIndex++;
  if (songIndex > song.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
};
const updateProgress = (e) => {
  const { duration, currentTime } = e.srcElement;
  const progressPerCent = (currentTime / duration) * 100;
  progress.style.width = `${progressPerCent}%`;
};
