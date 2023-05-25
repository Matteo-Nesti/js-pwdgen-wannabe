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

const result = nomeX + sufixNumber;
console.log(result);

// selezionato elemento dal dom e result nell'elemento.

document.getElementById('pass-gen').innerText = result;

