document.addEventListener("DOMContentLoaded", function () {
    console.log("Spotify Clone Loaded");

    const audio = document.getElementById("audioPlayer");
    const currentSong = document.getElementById("current-song");

    // Example: Highlight the active page
    const navLinks = document.querySelectorAll(".navbar ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Example: Search functionality (future implementation)
    const searchBox = document.querySelector(".search h1");
    if (searchBox) {
        searchBox.addEventListener("click", function () {
            alert("Search functionality coming soon!");
        });
    }

    // Toggle play/pause for the current song
    function togglePlayPause(songPath, artistName) {
        if (audio.src.includes(songPath)) {
            if (audio.paused) {
                audio.play();
                document.getElementById(`play-${artistName}`).style.display = 'none';
                document.getElementById(`pause-${artistName}`).style.display = 'inline-block';
                currentSong.innerText = "Now Playing: " + artistName;
            } else {
                audio.pause();
                document.getElementById(`play-${artistName}`).style.display = 'inline-block';
                document.getElementById(`pause-${artistName}`).style.display = 'none';
            }
        } else {
            audio.src = songPath;
            audio.play();
            document.getElementById(`play-${artistName}`).style.display = 'none';
            document.getElementById(`pause-${artistName}`).style.display = 'inline-block';
            currentSong.innerText = "Now Playing: " + artistName;
        }
    }

    // Play and Pause functionality for the global play/pause button
    document.getElementById("playPauseButton").addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            document.querySelector("#playPauseButton").innerText = "⏸️ Pause";
        } else {
            audio.pause();
            document.querySelector("#playPauseButton").innerText = "▶️ Play";
        }
    });
});
