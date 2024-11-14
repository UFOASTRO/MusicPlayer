let progress = document.querySelector('.progress');
let song = document.querySelector('.song');
let control = document.getElementById('controlIcon');
let picture = document.querySelector('.picture');
song.onloadedmetadata = function(){
   progress.max = song.duration;
   progress.value = song.currentTime;  
}

function playPause() {
    if (control.classList.contains('fa-pause')) {
        song.pause();
        control.classList.remove('fa-pause');
        control.classList.add('fa-play');
        picture.classList.remove('playing');
        picture.classList.add('asake') // Pause animation
    } else {
        song.play();
        picture.classList.add('playing'); // Resume animation
        control.classList.add('fa-pause');
        control.classList.remove('fa-play');
    }
}

song.ontimeupdate = function() {
    progress.value = song.currentTime;
};

progress.addEventListener('change', function() {
    song.currentTime = progress.value;
    song.play();
    picture.classList.add('playing'); // Resume animation
    control.classList.add('fa-pause');
    control.classList.remove('fa-play');
});
control.addEventListener('click', playPause);
lengthOfSong =song.duration;
console.log(lengthOfSong)

// Chat GPT helped me with this block.😭
song.addEventListener('ended', () => {
    picture.classList.remove('asake'); // Stop animation when song ends
    control.classList.remove('fa-pause');
    control.classList.add('fa-rotate-right');

    // Add a click event listener for restarting the song
    control.addEventListener('click', function restartSong() {
        song.currentTime = 0; // Reset song to the beginning
        song.play(); // Start the song again
        control.classList.remove('fa-rotate-right');
        control.classList.add('fa-pause');

        // Remove this event listener to prevent multiple triggers
        control.removeEventListener('click', restartSong);
    });
});
