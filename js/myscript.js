//dichiarazione delle variabili
let nome, cognome, colore, finalPassword;
let addToPassword = "21";
//input dei dati
nome = prompt("Inserisci il tuo nome: ");
cognome = prompt("Inserisci il tuo cognome: ");
colore = prompt("Inserisci il tuo colore preferito: ");

//elaborazione 
finalPassword = nome + cognome + colore + addToPassword;

//output dei dati
document.getElementById("mio_id").innerHTML = "La password assegnata è: " + finalPassword;