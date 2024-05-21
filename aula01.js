var qg = prompt("Digite a quantidade de gols");
var qpc = prompt("Digite a quantidade de passes certos");
var qpe = prompt("Digite a quantidade de passes errados");


var tp =(qg * 50) + (qpc * 10) + (qpe * -5);

document.write(tp + " Pontos ")

if (tp < 50) {
document.write    ("Pessima partida")
}
else if (tp >= 50 && tp <100) {
document.write    ("Jogou mal")
}
else if (tp >= 100 && tp <150) {
document.write    ("Apenas jogou")
}
else if (tp >= 150 && tp <200) {
document.write    ("jogou legal")
}
else if (tp >= 200) {

document.write    ("jogou demais", '<br/>')
}
