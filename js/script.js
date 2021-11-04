let nome = prompt('Inserisci il tuo nome');
console.log(nome);

let cognome = prompt('Inserisci il tuo cognome');
console.log(cognome);

let colore = prompt ('Inserisci il tuo colore preferito');
console.log(colore);


let pw = nome + cognome + colore + '21';

console.log(pw);

document.getElementById('ur-pw').innerHTML = pw;