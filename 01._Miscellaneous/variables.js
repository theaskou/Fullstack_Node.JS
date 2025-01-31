// avoid var


const name = "Thea";
// const is not a constant. That means that const CAN have it's value changed, but it is a CONSTANT in the declaration.
// const must be declared when initialized.
// Strings er immutable - derfor kan man ikke ændre en string, og den returnerer et nyt objekt(??)

const name2 = {};

// ^denne declaration (objekt) kan godt assignes en ny string til


const hobbies = ["coding"];

hobbies.push("drawing", "painting");

console.log(hobbies);

hobbies.pop() // fjerner den sidste i arrayet

console.log(hobbies);

// '' vs. "" (template literals) vs. `` (template strings):
// Der er en forskel med `` - String interpolation - Man kan bruge ${} og lave linjeskift. 
// Men der er en lille performance prop i det. (lidt langsommere)

const assignmentDescription = "value"
const value = 4;

console.log(assignmentDescription, value);
// + laver value om til string, fremfor hvis man skriver , som bevarer typen. For at undgå type coercion. 
// Console log er til debugging, så vi skal bl.a. bruge det til at se hvad værdien er jo

