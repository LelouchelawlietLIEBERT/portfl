const header = document.querySelector("header");
window.addEventListener("scroll",function(){
  header.classList.toggle("sticky",window.scrollY>130);
})

const phrases = [
  "Wait idiot, let it Load",
    "What i Provide to My client?",
    "Dumbass read it's there"
  ];
  
  const placeholder = document.querySelector('.placeholder');
  let phraseIndex = 0;
  let charIndex = 0;
  let typingSpeed = 75;
  let delayBetweenPhrases = 1500;
  
  function typePhrase() {
    if (charIndex < phrases[phraseIndex].length) {
      placeholder.textContent += phrases[phraseIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typePhrase, typingSpeed);
    } else {
      setTimeout(() => {
        placeholder.textContent = '';
        charIndex = 0;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typePhrase();
      }, delayBetweenPhrases);
    }
  }
  
  typePhrase();
  
  function scrolltoview(id){
    const ele = document.getElementById(id);
    if(ele){
      ele.scrollIntoView({behavior:"smooth"})
    }
  }