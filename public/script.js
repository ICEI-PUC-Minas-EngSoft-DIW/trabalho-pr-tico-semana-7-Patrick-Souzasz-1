/*Nome*/
let nome = prompt("Qual é o seu nome? ");
/*Renda mensal*/
let renda;
while (true) {
    renda = Number(prompt("Qual é a sua renda mensal? "));
    if (!isNaN(renda)) break;
    alert("Valor inválido! Digite um número.");
}
/*Número de despesas*/
let despesas;
while (true) {
    despesas = Number(prompt("Quantas despesas? "));
    if (!isNaN(despesas)) {
        if (despesas < 1) despesas = 1;
        if (despesas > 5) despesas = 5;
        if(isNaN(despesas)) alert("Valor inválido! Digite um número.")
        break;
        
    }
}
/*Contador de despesas*/
let despesastotais = 0;
let ndespesas = 0

for (let i = 1; i <= despesas; i++) {
    let valor;

    while (true) {
        valor = Number(prompt(`"Digite o valor da despesa ${i}: "`));
        if (!isNaN(valor)) break;
        alert("Valor inválido! Digite um número.");
    }
    ndespesas += 1
    despesastotais += valor
}
/*Final*/
let sobra = renda - despesastotais;

alert (`\nOrçamento de ${nome}:
Renda: R$${renda.toFixed(2)}
Total de despesas: ${ndespesas}
Custo total: R$${despesastotais.toFixed(2)}
Sobra: R$${sobra.toFixed(2)}`);

console.log(`"Orçamento de ${nome}:
    Renda: R$${renda.toFixed(2)}
    Número de despesas: ${ndespesas}
    Custo total: R$${despesastotais.toFixed(2)}
    Sobra: R$${sobra.toFixed(2)}"`);

if (despesastotais > renda) {
    alert("Você gastou mais do que ganhou!");
    console.log("Cuidado! Você gastou mais do que ganhou!");
} else {
    if (sobra >= (renda * 3 / 10)) {
        alert("Ótimo, boa margem de sobra. ");
        console.log("Ótimo, boa margem de sobra. ");
    } else {
        alert("Ok, dá para melhorar a sobra. ");
        console.log("Ok, dá para melhorar a sobra. ");
    }
}




