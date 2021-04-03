(() => {
  //variables at the top
  const dropZoneContainer = document.querySelector(".drop-zone"),
        dragZone = document.querySelector(".music-icons"),
        dragImages = document.querySelectorAll(".music-image"),


  //functions
  function dragStart(e) {
    console.log('started dragging');
    event.dataTransfer.setData("savedID", this.id);
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
  }

  //event handling
  dragImages.forEach(piece => piece.addEventListener("dragstart", dragStart));
  dropZone.forEach(zone => {
    zone.addEventListener("dragover", draggedOver);
    zone.addEventListener("drop", dropped);
  });

})();