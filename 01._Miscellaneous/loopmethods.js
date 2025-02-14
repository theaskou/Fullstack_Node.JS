// forEach, map, filter, reduce, findIndex, find

const myNumbers = [1, 2, 3, 4, 5, 6, 7];
const doubledNumbers = [];

myNumbers.forEach((element) => {
  const doubledValues = myNumbers[element] * 2;
  doubledNumbers.push(doubledValues);
});

// Undgå at bruge fr loops med mindre vi vil tælle ting
// Ellers skal der bruges andre array metoder
// Pga sideeffekts!
// Man kan bruge filter til at reducere et array fx.

// Side effekts: manipulere attributter udenfor funktioner
// Muter aldrig den originale liste
// pure functions er når der ikke er side effects

const dubledNumberes = myNumbers.map((myNumber) => myNumber * 2);

const satellites = [
  {
    name: " International Space Station",
    height: 12000,
  },
  {
    name: "MIR",
    height: 0,
  },
  {
    name: "James Webb",
    height: 27000,
  },
];

// Lower the height of the satelites by 3.000 except for MIR
// Vi bruger MMAP fordi den skal ændre 1:1 - Vi skal have et Array med alle elementerne (Derfor ikke filter)
// Map kan blive "paralized" / concurrent

const loweredSatelites = satellites.map((satelite) => {
  if (satelite.name === "MIR") {
    return satelite;
    // Dette kan give en bug hvis der ændres på dette objekt andre steder i programmet,
    // Da man returnerer samme objekt på denne måde.
  }
  return {
    height: satelite.height - 3000,
    name: satelite.name,
  };
});

// Dette er det samme:

const loweredSatelites2 = satellites.map((satelite) => ({
  // Hvis man pakker det hele ind i paranteser, returneres et bjekt automatisk
  height: satelite.name === "MIR" ? satelite.height : satelite.height - 3000,
  name: satelite.name,
}));

const listOfReactions = ["thumbs down", "thumbs down", "thumps down"];

// Make a list that reacts as many times as above with thumbs up

const newListOfReactions = listOfReactions.map((reaction) => "thumbs up");
