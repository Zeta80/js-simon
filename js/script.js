// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//prendo da html le cose che servono
// const numberOne = document.getElementById("number1")
// const numberTwo = document.getElementById("number2")
// const numberThree = document.getElementById("number3")
// const numberFour = document.getElementById("number4")
// const numberFive = document.getElementById("number5")
const itemCont = document.querySelector(".item-cont")

const title = document.querySelector("h1");
let count = 2



//creo un array che conterrà i 5 numeri generati a caso
const rndNumbers = [];
//creo un array dove mettere i numeri scritti da user
const userNumbers = [];

//ciclo while per generare numericamente i 5 numeri casuali
do {
    let randomNums = getRndInteger(1, 100)
    console.log(randomNums);

    if (!rndNumbers.includes(randomNums)) {
        rndNumbers.push(randomNums)
    }

} while (rndNumbers.length !== 5);
console.log(rndNumbers);

//ciclo for per stampare in html numeri in array casuali

for (let i = 0; i < rndNumbers.length; i++) {
    const numbers = `
    <div class="item number${rndNumbers[i]}">
        <h2> ${rndNumbers[i]} </h2>
    </div>`
    console.log(numbers);

    itemCont.innerHTML += numbers;

}


const counter = setInterval(function () {
    if (count > 0) {
        title.innerHTML = count;
        count--;
        console.log(count);
    } else {
        const element = document.querySelectorAll(".item");
        console.log(element);
        element.
            console.log(count);
        clearInterval(counter);
    }
}, 1000);





// FUNCTIONS

// FUNCTIONS
// /**
//  * Description Genera un numero random in range tra min e max (inclusi)
//  * @param {number} min
//  * @param {number} max
//  * @returns {number} un numero intero generato in modo random
//  */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}