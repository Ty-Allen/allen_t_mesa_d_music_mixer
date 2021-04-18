(() => {
  //variables at the top
  const dropZoneContainer = document.querySelector(".drop-zone"),
        dragZone = document.querySelector(".music-icons"),
        dragImages = document.querySelectorAll(".music-image"),
        dropZones = document.querySelectorAll(".drop-zone"),
        play = document.querySelector("#button1"),
        pause = document.querySelector("#button2");

  var soundCount1 = document.getElementsByTagName("audio")[0];
  var soundCount2 = document.getElementsByTagName("audio")[1];
  var soundCount3 = document.getElementsByTagName("audio")[2];
  var soundCount4 = document.getElementsByTagName("audio")[3];
  var soundCount5 = document.getElementsByTagName("audio")[4];
  var soundCount6 = document.getElementsByTagName("audio")[5];
  var soundCount7 = document.getElementsByTagName("audio")[6];
  var soundCount8 = document.getElementsByTagName("audio")[7];
  var soundCount9 = document.getElementsByTagName("audio")[8];
  var soundCount10 = document.getElementsByTagName("audio")[9];


  //functions
  function dragStart(e) {
    console.log('started dragging');
    event.dataTransfer.setData("savedID", this.id);
    event.dataTransfer.setData("savedData", this.dataset.audio);
  }

  function draggedOver(e) {
    e.preventDefault();
    console.log("dragged over me");
  }

  function dropped(e) {
    e.preventDefault();
    if (this.childElementCount > 0) { return; }
    console.log('dropped')
    let targetID = event.dataTransfer.getData("savedID");
    console.log("I dragged this image", targetID);
    event.target.appendChild(document.querySelector(`#${targetID}`));

    let data = event.dataTransfer.getData("savedData");
    console.log("Has Id", data);
    let audio = document.querySelector(`audio[data-audio="${data}"]`);

    audio.volume = 0.2;
    audio.play();
    audio.loop = true;
    audio.setAttribute("class", "playing")
  }

  function playAudio() {
    if(soundCount1.classList.contains("paused")){
    soundCount1.play();
    soundCount1.setAttribute("class", "playing");
    };
    if(soundCount2.classList.contains("paused")){
    soundCount2.play();
    soundCount2.setAttribute("class", "playing");
    };
    if(soundCount3.classList.contains("paused")){
    soundCount3.play();
    soundCount3.setAttribute("class", "playing");
    };
    if(soundCount4.classList.contains("paused")){
    soundCount4.play();
    soundCount4.setAttribute("class", "playing");
    };
    if(soundCount5.classList.contains("paused")){
    soundCount5.play();
    soundCount5.setAttribute("class", "playing");
    };
    if(soundCount6.classList.contains("paused")){
    soundCount6.play();
    soundCount6.setAttribute("class", "playing");
    };
    if(soundCount7.classList.contains("paused")){
    soundCount7.play();
    soundCount7.setAttribute("class", "playing");
    };
    if(soundCount8.classList.contains("paused")){
    soundCount8.play();
    soundCount8.setAttribute("class", "playing");
    };
    if(soundCount9.classList.contains("paused")){
    soundCount9.play();
    soundCount9.setAttribute("class", "playing");
    };
    if(soundCount10.classList.contains("paused")){
    soundCount10.play();
    soundCount10.setAttribute("class", "playing");
    };
  }

  function pauseAudio() {
      if(soundCount1.classList.contains("playing")){
        soundCount1.pause();
        soundCount1.setAttribute("class", "paused");
      }
      if(soundCount2.classList.contains("playing")){
        soundCount2.pause();
        soundCount2.setAttribute("class", "paused");
      }
      if(soundCount3.classList.contains("playing")){
        soundCount3.pause();
        soundCount3.setAttribute("class", "paused");
      }
      if(soundCount4.classList.contains("playing")){
        soundCount4.pause();
        soundCount4.setAttribute("class", "paused");
      }
      if(soundCount5.classList.contains("playing")){
        soundCount5.pause();
        soundCount5.setAttribute("class", "paused");
      }
      if(soundCount6.classList.contains("playing")){
        soundCount6.pause();
        soundCount6.setAttribute("class", "paused");
      }
      if(soundCount7.classList.contains("playing")){
        soundCount7.pause();
        soundCount7.setAttribute("class", "paused");
      }
      if(soundCount8.classList.contains("playing")){
        soundCount8.pause();
        soundCount8.setAttribute("class", "paused");
      }
      if(soundCount9.classList.contains("playing")){
        soundCount9.pause();
        soundCount9.setAttribute("class", "paused");
      }
      if(soundCount10.classList.contains("playing")){
        soundCount10.pause();
        soundCount10.setAttribute("class", "paused");
      }
  }

  //event handling
  dragImages.forEach(piece => piece.addEventListener("dragstart", dragStart));
  dropZones.forEach(zone => {
    zone.addEventListener("dragover", draggedOver);
    zone.addEventListener("drop", dropped);
  });

  play.addEventListener("click", playAudio);
  pause.addEventListener("click", pauseAudio);

})();
