//Fazendo uma funcao que pegue o dia util atual, mostre quantos restantes e qual o proximo 



function diasUteis() {
    const dias = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    let contando = 0;

    for (let i = 0; i < dias.length; i++) {
        if (dias[i] !== "domingo" && dias[i] !== "sábado") {
            contando++;
            return dias[i];
        }
    }
    return contando;

}

console.log(diasUteis()); 