//dichiarazione delle variabili
let nome, cognome, colore;

//input dei dati
nome = prompt("Inserisci il tuo nome: ");
cognome = prompt("Inserisci il tuo cognome: ");
colore = prompt("Inserisci il tuo colore preferito: ");

//output dei dati
document.getElementById("mio_id").innerHTML = "La password assegnata è: " + nome + cognome + colore + "21";