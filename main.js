// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded')
  likeHeart()
});


function likeHeart() {
  let allListLikes = document.querySelectorAll('.like-glyph');
  allListLikes.forEach( likeInstance => likeInstance.addEventListener("click", swapHeart))
}

function swapHeart(event) {

  if (event.target.className === "like-glyph") {
    mimicServerCall()
      .then(() => {
          event.target.className = 'activated-heart';
          event.target.innerText = FULL_HEART
      })
        .catch(() => displayError())
      } else {
        event.target.className = 'like-glyph'
        event.target.innerText = EMPTY_HEART
      }
}

function displayError() {
  modal.removeAttribute('class')
  setTimeout(() => {
    modal.className = 'hidden'
  }, 5000);
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
