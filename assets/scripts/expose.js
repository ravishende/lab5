// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const audioTag = document.getElementsByClassName("hidden")[0];
  const soundButton = document.querySelector("button");
  const select = document.getElementById("horn-select");
  const volumeControlInput = document.getElementById('volume');
  const audioImg = document.querySelector("div > img");
  const hornImg = document.querySelector("img");
  const jsConfetti = new JSConfetti();

  let hornType = "";

  // horn dropdown changed
  select.addEventListener("change", (event) => {
    const selectedOption = event.target;
    // airhorn
    if(selectedOption.value == "air-horn"){
      const imgUrl = "assets/images/air-horn.svg";
      hornImg.src = imgUrl;
      // change sound of audio tag
      audioTag.src = "assets/audio/air-horn.mp3";

    }
    // car horn
    else if(selectedOption.value == "car-horn"){
      const imgUrl = "assets/images/car-horn.svg";
      hornImg.src = imgUrl;
      // change sound of audio tag
      audioTag.src = "assets/audio/car-horn.mp3";
    }
    // party horn
    else if(selectedOption.value == "party-horn"){
      const imgUrl = "assets/images/party-horn.svg";
      hornImg.src = imgUrl;
      // change sound of audio tag
      audioTag.src = "assets/audio/party-horn.mp3";
    }
    // select
    else {
      const imgUrl = "assets/images/no-image.png";
      hornImg.src = imgUrl;
    }
    hornType = selectedOption.value;
  });

  // volume slider changed
  console.log(audioImg)
  volumeControlInput.addEventListener("change", (event) => {
    // get value after change
    let audioLevel = volumeControlInput.value;
    let audioTagVolume = audioLevel/100;
    audioTag.volume = audioTagVolume;
    let imgUrl;
    // 67->100
    if (audioLevel >= 67 ){
      imgUrl = "assets/icons/volume-level-3.svg";
    } 
    // 33->66
    else if (audioLevel >= 33) {
      imgUrl = "assets/icons/volume-level-2.svg";
    }
    // 1->32
    else if (audioLevel >= 1) {
      imgUrl = "assets/icons/volume-level-1.svg";
    }
    // audio is 0
    else {
      imgUrl = "assets/icons/volume-level-0.svg";
    }
    audioImg.src = imgUrl;
  });

  // play horn audio
  soundButton.addEventListener("click", (event) => {
    console.log(audioTag);
    console.log(audioTag.volume);
    if(hornType === "party-horn"){
      jsConfetti.addConfetti();
    }
    audioTag.play();
  });


}