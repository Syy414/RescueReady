// Get modals
var incisedModal = document.getElementById("incisedModal");
var lacerationModal = document.getElementById("lacerationModal");
var abrasionModal = document.getElementById("abrasionModal");
var contusionModal = document.getElementById("contusionModal");
var punctureModal = document.getElementById("punctureModal");
var stabModal = document.getElementById("stabModal");
var gunshotModal = document.getElementById("gunshotModal");

// Get buttons
var incisedButton = document.getElementById("incisedButton");
var lacerationButton = document.getElementById("lacerationButton");
var abrasionButton = document.getElementById("abrasionButton");
var contusionButton = document.getElementById("contusionButton");
var punctureButton = document.getElementById("punctureButton");
var stabButton = document.getElementById("stabButton");
var gunshotButton = document.getElementById("gunshotButton");

// Get audio elements
var incisedSound = document.getElementById("incisedSound");
var lacerationSound = document.getElementById("lacerationSound");
var abrasionSound = document.getElementById("abrasionSound");
var contusionSound = document.getElementById("contusionSound");
var punctureSound = document.getElementById("punctureSound");
var stabSound = document.getElementById("stabSound");
var gunshotSound = document.getElementById("gunshotSound");

// Get close elements
var closeButtons = document.getElementsByClassName("close");

// Open modals and play sounds
incisedButton.onclick = function() {
  incisedModal.style.display = "block";
  incisedSound.play();
}
lacerationButton.onclick = function() {
  lacerationModal.style.display = "block";
  lacerationSound.play();
}
abrasionButton.onclick = function() {
  abrasionModal.style.display = "block";
  abrasionSound.play();
}
contusionButton.onclick = function() {
  contusionModal.style.display = "block";
  contusionSound.play();
}
punctureButton.onclick = function() {
  punctureModal.style.display = "block";
  punctureSound.play();
}
stabButton.onclick = function() {
  stabModal.style.display = "block";
  stabSound.play();
}
gunshotButton.onclick = function() {
  gunshotModal.style.display = "block";
  gunshotSound.play();
}

// Close modals
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function() {
    var modals = document.getElementsByClassName("modal");
    for (var j = 0; j < modals.length; j++) {
      modals[j].style.display = "none";
    }
  }
}

// Close when clicking outside modal
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
}








document.addEventListener('DOMContentLoaded', () => {
  const woundCards = document.querySelectorAll('.wound-card');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close');
  
  let currentIndex = 0;

  function showModal(index) {
    modals[index].style.display = 'block';
    const sound = document.getElementById(`${woundCards[index].id.replace('Button', 'Sound')}`);
    if (sound) {
      sound.play();
    }
  }

  woundCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      currentIndex = index;
      showModal(index);
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      button.closest('.modal').style.display = 'none';
    });
  });

  window.addEventListener('click', (event) => {
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });

  const updateCarousel = (direction) => {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = woundCards.length - 1;
    if (currentIndex >= woundCards.length) currentIndex = 0;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
  };

  document.getElementById('nextButton').addEventListener('click', () => updateCarousel(1));
  document.getElementById('prevButton').addEventListener('click', () => updateCarousel(-1));
});
