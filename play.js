document.addEventListener("DOMContentLoaded", function () {
    const playImg = document.getElementById("play");
    const playImg2 = document.getElementById("play2");
    const playImg3 = document.getElementById("play3")
    const playImg4 = document.getElementById("play4")

    const playlistimg = document.getElementById('playlist-click')
    const playlistimg2 = document.getElementById('playlist-click2')
    const audio = new Audio('./songs/Duvet.mp3');
    const audio2 = new Audio('./songs/old.mp3');
    const audio3 = new Audio('./songs/hanuman.mp3')
    const audio4 = new Audio('./songs/tum.mp3')
    const progressBar = document.getElementById("progress-bar");
    const box = document.querySelectorAll('.box1');
    let main = document.querySelector('.playlist');
    let main2 = document.querySelector('.playlist2')
    let navarrow = document.getElementById('navarrow')
    let isPlaying = false;
    let isPlaying2 = false;
    let isPlaying3 = false;
    let isPlaying4 = false;
    var toggle = true;

    const songDurations = [];


    function getAndStoreDuration(audioElement, index) {
        audioElement.addEventListener('loadedmetadata', () => {
            const duration = audioElement.duration;
            songDurations[index] = duration;
            console.log(`Duration of song ${index + 1}: ${duration} seconds`);
        });
    }
    getAndStoreDuration(audio, 0);
    getAndStoreDuration(audio2, 1);
    getAndStoreDuration(audio3, 2);
    getAndStoreDuration(audio4, 3);

    const playlist1 = document.querySelectorAll('.duration');
    let index = 0
    playlist1.forEach((song)=>{
        console.log(toString(songDurations[0]))
        song.innerHTML=songDurations[0];
    })

    navarrow.onclick = () => {
        toggle = !toggle;
        main2.style.display = toggle ? 'none' : 'block';
        main.style.display = 'block'
    };

    setInterval(() => {
        toggle?main.style.display='visible':main.style.display='none';
        
    }, 1);
    setInterval(()=>{
        toggle?main2.style.display='none':main2.style.display='block'
        toggle?navarrow.style.display='none':navarrow.style.display='block'
    },1)
   
    const playPauseButton = document.getElementById("play-pause-button");
    box.forEach((box)=>{
        box.onclick=()=>{
            toggle = !toggle 
            console.log(toggle)
        }
    })
    playPauseButton.onclick = function () {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
  
      isPlaying = !isPlaying;
      updatePlayPauseIcon();
    };

    playlistimg.onclick = async ()=>{
        isPlaying = !isPlaying;
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
        updatePlayPauseIconforplaylist()
    }
    
    playImg.onclick = async () => {
        isPlaying = !isPlaying;

        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }

        updatePlayPauseIcon();
    };

    playImg2.onclick = async () => {
        isPlaying2 = !isPlaying2;

        if (isPlaying2) {
            audio2.play();
        } else {
            audio2.pause();
        }

        updatePlayPauseIcon2();
    };
    playImg3.onclick = async () => {
        isPlaying3 = !isPlaying3;

        if (isPlaying3) {
            audio3.play();
        } else {
            audio3.pause();
        }

        updatePlayPauseIcon3();
    };
    playImg4.onclick = async () => {
        isPlaying4 = !isPlaying4;

        if (isPlaying4) {
            audio4.play();
        } else {
            audio4.pause();
        }

        updatePlayPauseIcon4();
    };
    

    audio.addEventListener('timeupdate', () => {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${percentage}%`;
    });
    audio2.addEventListener('timeupdate', () => {
        const percentage = (audio2.currentTime / audio2.duration) * 100;
        progressBar.style.width = `${percentage}%`;
    });
    audio3.addEventListener('timeupdate', () => {
        const percentage = (audio3.currentTime / audio3.duration) * 100;
        progressBar.style.width = `${percentage}%`;
    });
    audio4.addEventListener('timeupdate', () => {
        const percentage = (audio4.currentTime / audio4.duration) * 100;
        progressBar.style.width = `${percentage}%`;
    });

    audio.addEventListener('ended', () => {
        isPlaying = false;
        updatePlayPauseIcon();
    });
    audio2.addEventListener('ended', () => {
        isPlaying2 = false;
        updatePlayPauseIcon2();
    });
    audio3.addEventListener('ended', () => {
        isPlaying3 = false;
        updatePlayPauseIcon3();
    });
    audio4.addEventListener('ended', () => {
        isPlaying4 = false;
        updatePlayPauseIcon4();
    });

    function updatePlayPauseIconforplaylist() {
        playlistimg.src = isPlaying ? './assets/pause.png' : './assets/play.png';

    }
    function updatePlayPauseIconforplaylist2() {
        playlistimg2.src = isPlaying ? './assets/pause.png' : './assets/play.png';

    }

    function updatePlayPauseIcon() {
        playImg.src = isPlaying ? './assets/pause.png' : './assets/play.png';

    }
    
    function updatePlayPauseIcon2() {
        playImg2.src = isPlaying2 ? './assets/pause.png' : './assets/play.png';

    }
    function updatePlayPauseIcon3() {
        playImg3.src = isPlaying3 ? './assets/pause.png' : './assets/play.png';

    }
    function updatePlayPauseIcon4() {
        playImg4.src = isPlaying4 ? './assets/pause.png' : './assets/play.png';

    }
});