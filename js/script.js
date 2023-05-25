console.log('JS OKJS OK')

// creare variabile stringa 21
const sufixNumber = '21';
console.log(sufixNumber);

// chiedere info all'utente 

const firstName = prompt('come ti chiami?');
console.log(firstName);

const lastName = prompt('qual\'e\' il tuo cognome?');
console.log(lastName);

const favouriteColor = prompt('e il tuo colore preferito?')
console.log(favouriteColor);

//concatenare le variabili

const nomeX = firstName + lastName + favouriteColor;
console.log(nomeX);

const risultato = nomeX + sufixNumber;
console.log(risultato);

// selezionato elemento dal dom e risultato nell'elemento.

document.getElementById('pass-gen').innerText = risultato;

