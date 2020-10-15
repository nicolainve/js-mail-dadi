// ESERCIZIO MAIL

var mailList = ['mariorossi@mail.com','johnappleseed@mail.com', 'johndoe@mail.com'];

var input = prompt('Inserisci la mail').toLowerCase().trim();

var mailFound = false;

for (var i = 0; i < mailList.length; i++) {
  var mail = mailList[i]

  if (input == mail) {
    mailFound = true;
  }
}

var message;

if (mailFound == true) {
  message = 'Inserisci la password';
} else {
  message = 'Mail non presente';
}

document.getElementById('message1').innerHTML = message;


// ESERCIZIO DADI

var nUser = Math.floor(Math.random() * 6) + 1;

var nComputer = Math.floor(Math.random() * 6) + 1;

document.getElementById('nUser').innerHTML = nUser

document.getElementById('nComputer').innerHTML = nComputer

var message2;

if (nUser > nComputer) {
  message2 = 'Hai vinto!';
} else if (nUser < nComputer) {
  message2 = 'Hai perso, ritenta la fortuna!';
} else {
  message2 = 'Parità, ritira.';
}

document.getElementById('message2').innerHTML = message2;
