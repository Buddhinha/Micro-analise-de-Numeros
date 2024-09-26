const numeros = [];

function adicionamento() {
    var number = document.getElementById("numero").value;
    number = Number(number); // Converte o valor do input para número

    if (number <= 0 || number > 100) {
        window.alert("repete nenem");
    } else {
        numeros.push(number); // Agora estamos adicionando números ao array
        console.log(numeros);

        var bancoview = document.getElementById('banco');
        bancoview.innerHTML += number + '<br>';
        document.getElementById("numero").value = "";
    }
}

function verificamento() {
    console.log('ta feito homi');
    var n = numeros.length;
    console.log(`ao total temos ${n} elementos`);

    const m = Math.min(...numeros);
    console.log(`o menor numero é ${m}`);

    const mm = Math.max(...numeros);
    console.log(`o maior numero é ${mm}`);

    const sum = numeros.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(`A soma dos números é ${sum}`);
    

    const media = sum / n;
    console.log(media)

    
    document.getElementById("res").innerHTML = `
        Ao total temos ${n} elementos <br>
        O menor número é ${m}<br>
        O maior número é ${mm}<br>
        a soma dos números é ${sum}<br>
        a medía é ${media}<br>

    `;
}
