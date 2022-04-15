//lendo o numero de coxinhas consumidas e quantidade de consumidores
let line = gets().split(" ");

//separando as variaveis
let X = parseInt(line[0]);
let Y = parseInt(line[1]);

//calculo a media de consumo
let MEDIA = X / Y;

//saida com a media de consumo
//uso toFixed(2) para printar duas casas decimais
print(MEDIA.toFixed(2));