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