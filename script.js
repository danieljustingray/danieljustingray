function playAudio(button, audioSrc) {
    const audioPlayer = document.getElementById("audio-player");
    audioPlayer.src = audioSrc;
    audioPlayer.play();
}

function filterSongs() {
    const input = document.getElementById("song-search").value.toLowerCase();
    const songCards = document.getElementsByClassName("song-card");

    Array.from(songCards).forEach(card => {
        const songTitle = card.querySelector(".song-info h3").textContent.toLowerCase();
        const artist = card.querySelector(".song-info p").textContent.toLowerCase();
        card.style.display = songTitle.includes(input) || artist.includes(input) ? "" : "none";
    });
}
