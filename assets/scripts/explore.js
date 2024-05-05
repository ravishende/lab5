// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  // const voicesAvailable = SpeechSynthesis.getVoices();
  // const inputForm = document.querySelector("form");
  const inputText = document.getElementById("text-to-speak");
  const faceImg = document.querySelector("img");
  const talkButton = document.querySelector("button");
  const voiceSelect = document.getElementById("voice-select");
  let utterance = new SpeechSynthesisUtterance(inputText.value);
  let voices = [];
  
  // wait til voices load, the get the voices
  synth.onvoiceschanged = function() {
    voices = synth.getVoices();
    populateVoiceList();
  };

  // get all the voices
  function populateVoiceList(){
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  // when input text is changed, update utterance to be that text
  inputText.addEventListener("change", (event) => {
    utterance = new SpeechSynthesisUtterance(inputText.value);
  });

  // update the voiced depending on the selected voice.
  voiceSelect.addEventListener("change", (event) => {
    const selectedOption = voiceSelect.selectedOptions[0];
    // set data-name in synth to match selectedOption.data-name
    const selectedName = selectedOption.getAttribute("data-name");
    for(let i=0; i< voices.length; i++){
      if (voices[i].name == selectedName){
        utterance.voice = voices[i];
      }
    }
  });
  
  // speak when button is clicked
  talkButton.addEventListener("click", (event) => {
    const closedMouthURL = "assets/images/smiling.png";
    const openMouthURL = "assets/images/smiling-open.png";
    // say the text to speech
    synth.speak(utterance);
    // open mouth when talking
    utterance.onstart = function() {
      faceImg.src = openMouthURL;
    };
    // close mouth when finished
    utterance.onend = function(){
      faceImg.src = closedMouthURL;
    }
  });

}