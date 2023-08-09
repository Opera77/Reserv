document.querySelector('.menu-icon').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('active');
});


// Fonction pour changer les mots après 3 secondes
function changeWords() {
    const words = document.querySelectorAll('.word-animation');
    const wordList = ["<br> Des soins de qualité ", "<br> Un personnel attentionné ", "<br> Une expertise médicale", "<br> Un environnement sécurisé"];
    let currentWord = 0;
  
    setInterval(function() {
      currentWord++;
      if (currentWord >= wordList.length) {
        currentWord = 0;
      }
      words.forEach(word => {
        word.innerHTML = wordList[currentWord];
      });
    }, 3500); 
  }
  
  // Appeler la fonction changeWords au chargement de la page
  window.addEventListener('DOMContentLoaded', changeWords);
  