(() => {
  //variables at the top
  const dropZoneContainer = document.querySelector(".drop-zone"),
        dragZone = document.querySelector(".music-icons"),
        dragImages = document.querySelectorAll(".music-image"),
        dropZones = document.querySelectorAll(".drop-zone");

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

    audio.play();
    audio.loop = true;
  }

  //event handling
  dragImages.forEach(piece => piece.addEventListener("dragstart", dragStart));
  dropZones.forEach(zone => {
    zone.addEventListener("dragover", draggedOver);
    zone.addEventListener("drop", dropped);
  });

})();
