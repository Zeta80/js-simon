// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//prendo da html le cose che servono

const itemCont = document.querySelector(".item-cont")
const elementBlock = document.querySelector(".block");
console.log(elementBlock);
const title = document.querySelector("h1");
let count = 10




//creo un array che conterrà i 5 numeri generati a caso
const rndNumbers = [];
//creo un arrey dove mettere i numeri scritti da user
const questionsUser = [];


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

// timer per il conteggio alla rovescia di 30 secondi
const counter = setInterval(function () {

    if (count > 0) {
        title.innerHTML = `hai ${count} secondi per memorizzare!!!`;
        count--;
        console.log(count);
    } else {
        title.innerHTML = "vediamo se ti ricordi"
        elementBlock.classList.add("hidden")
        console.log(count);
        clearInterval(counter);
        console.log(questionsUser);
        //chiedo prompt all utente solo se il timer (cont) è 0
        const question = setInterval(function () {
            for (let i = 0; i < 5; i++) {
                const numbers = parseInt(prompt(`scrivi il ${[i + 1]} numero `));
                console.log(numbers);
                questionsUser.push(numbers);
                console.log(questionsUser);
                if (questionsUser.length === 5) {
                    clearInterval(question);
                }
            }
            textResult()
        }, 500);
    }
}, 1000);

function textResult() {
    let correctNumber = intersect_safe(rndNumbers, questionsUser)
    if (correctNumber.length == 5) {
        title.innerHTML = `Grandissimo madonna MEMORIA DA ELEFANTE, john unordinary `
    } else if (correctNumber.length > 0) {
        title.innerHTML = `hai scritto ${correctNumber.length} numeri giusti `
    } else {
        title.innerHTML = `riprova va, hai errato TUTTO`
    }
}

//dico all utente quanti numeri giusti ha scritto
/**
 * Description
 * @param {array} a metto un array per confronto
 * @param {Array} b metto secondo array per confronto
 * @returns {array} return un array con numeri in ambo gli array
 */
function intersect_safe(a, b) {
    let ai = 0, bi = 0;
    let result = [];

    while (ai < a.length && bi < b.length) {
        if (a[ai] < b[bi]) { ai++; }
        else if (a[ai] > b[bi]) { bi++; }
        else /* sono uguali */ {
            result.push(a[ai]);
            ai++;
            bi++;
        }
    }

    return result;
}



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