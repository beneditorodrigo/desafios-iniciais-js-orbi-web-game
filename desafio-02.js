//usuario informa quantos vezes deseja testar a divisao
let limit = parseInt(gets());
//for para repetir a quantidade de vezes informada
for (let i = 0; i < limit; i++) {
    //leio do usuario a cada iteração
    let line = gets().split(" ");
    let X = parseInt(line[0]);
    let Y = parseInt(line[1]);
    //testo de é divisivel ou não
    if (Y == 0) {
        console.log("divisao impossivel");
    } else {
        let divisao = parseFloat(X / Y).toFixed(1); //complete com o sinal da operação faltante entre x e y
        console.log(divisao);
    }
}