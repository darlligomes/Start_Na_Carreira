function calcule(event){
event.preventDefault();
let conta = document.getElementById('conta').value;
let serviceIgual = document.getElementById('serviceIgual').value;
let QuantiaDePessoas = document.getElementById('QuantiaDePessoas').value;

if (conta == '' | serviceIgual == 0){
alert("Por favor, preencha os valores");
return;

}
 
if(QuantiaDePessoas <= 1 | QuantiaDePessoas == ''){
   QuantiaDePessoas = 1;
   document.getElementById('cada').style.display = "none";
} else {
   document.getElementById('cada').style.display = "block";
}

let total = (conta * serviceIgual) / QuantiaDePessoas;
 total = total.toFixed(2);
document.getElementById('Gorjeta').innerHTML = total;
document.getElementById('total').style.display = "block";

}

document.getElementById('total').style.display = "none";
document.getElementById('cada').style.display = "none";
document.getElementById('tipsform').addEventListener('submit', calcule);

