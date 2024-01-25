

const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#ffffff',
  progressColor: '#FF0000',
    url: 'Popular-(320Kbps.Com.In).mp3',
    height: 20,
    barWidth: 1,
    responsive: true,
    hideScrollbar: true,
    normalize:true,
    minPxPerSec:1
  })

  let playbtn = document.getElementById("playbtn");
  let playbtn_flag = true;
  playbtn.addEventListener("click",()=>{


if(playbtn_flag)  {  playbtn.setAttribute('name', 'pause-circle-outline')
    wavesurfer.play();
    playbtn_flag=!playbtn_flag;
}

else{  playbtn.setAttribute('name', 'play-outline')
    wavesurfer.pause();
    playbtn_flag=!playbtn_flag;
}

  })