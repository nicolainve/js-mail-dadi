/*
ESERCIZIO MAIL
*/

var mailList = ['mariorossi@mail.com','johnappleseed@mail.com', 'johndoe@mail.com'];

var input = prompt('Inserisci la mail').toLowerCase().trim();

var mailFound = false;

for (var i = 0; i < mailList.length; i++) {
  var mail = mailList[i]

  if (input == mail) {
    mailFound = true;
  }
}

var message1;

if (mailFound == true) {
  message1 = 'Inserisci la password per ' + input;
} else {
  message1 = 'La mail ' + input + ' non è stata trovata';
}

document.getElementById('message1').innerHTML = message1;


/*
ESERCIZIO DATI
*/

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
  message2 = 'Parità, ritira il dado.';
}

document.getElementById('message2').innerHTML = message2;
