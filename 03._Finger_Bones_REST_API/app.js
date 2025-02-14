const express = require("express"); // importerer
const app = express(); // instantierer

// Tænk over din egen løsning, hvorfor gav det ikke mening at bruge array og index, det kan give bugs nemlig

const fingerBones = [
  {
    id: 1,
    name: "Distal phalanx",
  },
  {
    id: 2,
    name: "Distal interphalangeal (DIP) joint",
  },
];

app.get("/fingerbones", (req, res) => {
  res.send({ data: fingerBones });
});

// hvorfor skal vi sende JSON og ikke array? res.send(fingerBones)
// REST -
// hvis vi kun sender array bliver headeren måske ikke sendt med
// Data bliver ustruktureret
// alle moderne biblioteker kan parse JSON - hvis man bare sender et array er der nogle sprog der ikke ved hvordan det skal behandles

app.get("/fingerbones/:id", (req, res) => {
  const fingerBoneID = Number(req.params.id);
  const foundFingerBones = fingerBones.find(
    (fingerBone) => fingerBone.id === fingerBoneID
  );
  if (!foundFingerBones) {
    // error case
    res.status(404).send("Fingerbone not found");
  } else {
    res.status(200).send({ data: foundFingerBones });
  }
});

// Status codes:
// 2XX - Everything went well
// 4XX - Klient error
// 5XX - Server error
// Skal vi have finetuned granulære statuskoder, eller skal vi bruge mainstream? Der er ikke noget rigtigt eller forkert, men det er en holdning

const PORT = 8080;
app.listen(PORT); // lytte på en port
