const contentitore = document.getElementById("container");


for (let contatore = 1; contatore < 101; contatore++) {

    let ilNostroIndice = contatore;

    let numero = ilNostroIndice;

    if (numero % 3 == 0 && numero % 5 == 0) {
        numero = "FizzBuzz"
    }

    if (numero % 3 == 0) {
        numero = "Fizz"
    }

    if (numero % 5 == 0) {
        numero = "Buzz"
    }

    contentitore.innerHTML = contentitore.innerHTML + `<div class="box">${numero}</div>`;
    
}
