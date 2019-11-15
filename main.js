var risultatoUtente = parseInt (prompt("Scegli un numero da 1 a 6"));
if (risultatoUtente > 6 || risultatoUtente < 1) {
    document.getElementById('numero-errato').innerHTML = 'No, devi inserire un numero tra 1 e 6!! Ricarica la pagina e riprova ;)';
    document.getElementById('gioco').setAttribute ('class', 'hide')
} else {
    document.getElementById('risultato-utente').innerHTML = risultatoUtente;
}

var risultatoBanco = Math.floor(((Math.random() * 10) * 6 / 10) + 1);
// // console.log(risultatoBanco);
document.getElementById('risultato-banco').innerHTML = risultatoBanco;
if (risultatoUtente < risultatoBanco) {
    document.getElementById('finale').innerHTML = 'Hai perso!!!';
}
else if (risultatoUtente == risultatoBanco) {
    document.getElementById('finale').innerHTML = 'Pareggio, banco vince..hai perso!!!';
}
else if (risultatoUtente > risultatoBanco) {
    document.getElementById('finale').innerHTML = 'Hai vinto!!!';
}
