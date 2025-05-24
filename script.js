const audio = document.getElementById("player");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const loopBtn = document.getElementById("loop-btn");
const volumeSlider = document.getElementById("volume");
const themeBtn = document.getElementById("theme-btn");
const progressBar = document.getElementById("progress");
const playlistLinks = document.querySelectorAll(".playlist a");

// Set initial song
audio.src = playlistLinks[0].getAttribute("data-src");
playlistLinks[0].classList.add("active-song");

// Handle playlist clicks
playlistLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const src = link.getAttribute("data-src");
    audio.src = src;
    audio.play();

    playlistLinks.forEach(l => l.classList.remove("active-song"));
    link.classList.add("active-song");
  });
});

// Play
playBtn.addEventListener("click", () => {
  audio.play();
});

// Pause
pauseBtn.addEventListener("click", () => {
  audio.pause();
});

// Loop toggle
loopBtn.addEventListener("click", () => {
  audio.loop = !audio.loop;
  loopBtn.classList.toggle("active");
  loopBtn.textContent = audio.loop ? "🔁 Loop: ON" : "🔁 Loop: OFF";
});

// Volume
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

// Progress
audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = percent + "%";
});

// Theme toggle
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});
