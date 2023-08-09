
const form = document.getElementById('reservation-form');
const confirmationMessage = document.getElementById('confirmation-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Récupérer les valeurs du formulaire
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const heure = document.getElementById('heure').value;

  // Envoyer un e-mail avec les informations du formulaire
  const emailBody = `Nom: ${nom}\nE-mail: ${email}\nDate: ${date}\nHeure: ${heure}`;
  // Ici, vous pouvez utiliser un service d'envoi d'e-mails ou une API pour envoyer l'e-mail

  // Afficher le message de confirmation
  form.classList.add('hidden');
  confirmationMessage.classList.remove('hidden'); 
  confirmationMessage.classList.add('fade-in');
});




/*let sendEmail = document.getElementById('btn');
const form = document.getElementById('reservation-form');

sendEmail.addEventListener('click', function (e) {
  e.preventDefault();
  sendEmail.value = 'Demande en cours...';
  const serviceID = 'service_gvhwl1n';
  const templateID = 'template_erfzdp6';

  emailjs.sendForm(serviceID, templateID, form)
   .then(() => {
    sendEmail.value = 'Send Email'; 
     alert('Sent!');
   }, (err) => {
    sendEmail.value = 'Send Email';
     alert(JSON.stringify(err));
   });
  });


  
  // Récupérer les valeurs du formulaire
  const nom = document.getElementById('nom').value;
  const emaild = document.getElementById('email').value;
  const dated = document.getElementById('date').value;
  const heured = document.getElementById('heure').value;

  // Envoyer un e-mail avec les informations du formulaire
  //const emailBody = `Nom: ${nom}\nE-mail: ${email}\nDate: ${date}\nHeure: ${heure}`;
  // Ici, vous pouvez utiliser un service d'envoi d'e-mails ou une API pour envoyer l'e-mail

  // Afficher le message de confirmation
 /* form.classList.add('hidden');
  confirmationMessage.classList.remove('hidden');
  confirmationMessage.classList.add('fade-in');
  */

/*
// Récupérer les valeurs du formulaire
  //const form = document.querySelector('.form');
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const heure = document.getElementById('heure').value;
  
  /*function msg(e){
    e.preventDefault;
        const nom = document.querySelector('.name'),
        email = document.querySelector('.email');
       
      Email.send({
      SecureToken : "2c3b48f2-d80f-48b3-97d1-40c01faec782",
      To : 'jeremiengovula77@gmail.com',
      From : email.value,
      Subject : "Resevation",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );

}*/

