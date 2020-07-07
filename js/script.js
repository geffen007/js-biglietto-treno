var eta = prompt ("Quanti anni hai?");
var km = prompt ("Quanti km vuoi percorrere?");
var costoTotale = km * 0.21;

var sconto = 0;
if (eta <= 18) {
    sconto = 20;
} else if (eta>=65) {
    sconto = 40;
} 


var scontato = costoTotale;
if (sconto == 20) {
    scontato = costoTotale - (costoTotale / 100 * 20);
}else if (sconto == 40 ) {
    scontato = costoTotale - (costoTotale / 100 * 40);
}



document.getElementById('eta').innerHTML=(eta);
document.getElementById('km').innerHTML=(km);
document.getElementById('costo-tot').innerHTML=(costoTotale);
document.getElementById('sconto').innerHTML=(sconto);

document.getElementById('prezzo-finale').innerHTML=(scontato);


console.log(eta);
console.log(km);
console.log(sconto);
