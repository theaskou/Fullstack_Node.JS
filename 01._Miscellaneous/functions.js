// Hoisting - funktionen bliver hævet op. Rækkefølgen kører ikke sekventielt i js, den læser hele filen 
// og funktionerne bliver hoistet.
console.log(getRandomInt(0, 10));

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max + 1 - min) - min);
} // ikke semikolon efter en funktionsdeklaration.

const whatIsThis = function getRandomInt(min, max){
    return Math.floor(Math.random() * (max + 1 - min) - min); 
}; // semikolen fordi det er en variabel / statement.
// hvilken type funktion er det? En anonym funktion, fordi den ikke har et navn.

const getRandomIntArrowFunction = () => {
    return Math.floor(Math.random() * (max + 1 - min) - min);
}; // arrow functions binder "this" keywordet på en anden måde, det er derfor det er blevet introduceret. Det er ikke pensum
// I js ændrer "this" sig i forhold til hvor den kaldes fra. 


// Callback funktion:
// en callback funktion er en en funktion man giver som parameter til en en funktion, med det formål at man muligvis
// kan kalde den senere.
                            // name: String,  action: function
function genericPerformer(name, action) {
    return action(name);
}

// Lasse, coding
const codingAction = (name) => `${name} likes coding.`;

console.log(genericPerformer("Lasse", codingAction))
// Kald funktionen uden () for at undgå at den bliver kørt med det samme. Hvis man gerne vil sende en funktions-
// reference (first class citizin) så man kan kalde funktionen senere (callback)
console.log(getRandomInt) // man får funktionsreferencen printet

// Andreas, sleeping

function sleepingAction(name) {
    return `${name} likes sleeping`;
}

console.log(genericPerformer("Andreas", sleepingAction));

// Tara, boxing
// Lav den som one-liner:

console.log(genericPerformer("Tara", (name) => `${name} owns at boxing`));

// const boxingAction = (name) => `${name} owns at boxing`;