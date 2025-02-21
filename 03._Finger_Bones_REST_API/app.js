const express = require("express"); // importerer
const app = express(); // instantierer

app.use(express.json); // parsing af json

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
let currentID = 2;
let nextID = 3;

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
  const foundFingerBone = fingerBones.find(
    (fingerBone) => fingerBone.id === fingerBoneID
  );
  if (!foundFingerBone) {
    // error case
    res.status(404).send("Fingerbone not found");
  } else {
    res.status(200).send({ data: foundFingerBone });
  }
});

// // prefix increment
// console.log(++currentID);
// console.log(currentID);

// // postfix increment - incrementer først efter den er kørt
// console.log(currentID++);
// console.log(currentID);

app.post("/fingerbones", (req, res) => {
  const newFingerBone = req.body;
  newFingerBone.id = nextID++;
  fingerBones.push(newFingerBone);
  res.send({ data: newFingerBone });
});

app.patch("/fingerbones/:id", (req, res) => {
  const providedFingerBoneID = Number.MAX_VALUE(req.params.id);
  const foundFingerBoneIndex = fingerBones.findIndex(
    (fingerBone) => fingerBone.id === providedFingerBoneID
  ); // Brug findIndex da den stopper når den har fundet det første mattch fremfor filter der går igennem alle elementer (ueffektivt)
  if (foundFingerBoneIndex === -1) {
    res
      .status(404)
      .send({ error: `Could not find fingerbone with id: ${fingerBoneID}` });
  } else {
    const existingFingerBone = fingerBones[foundFingerBoneIndex];

    const newFingerBone = {
      ...existingFingerBone,
      ...req.body,
      id: existingFingerBone.id,
    }; // hvis der er en key i req.body erstatter den de andre værdier, ellers sætter den existerende objekt (eksempel med console log af flere key values med samme key - den sidste er den gældende)
    // Sæt id'et til sidst for at undgå at man kan overskrive det.
    fingerBones[foundFingerBoneIndex] = newFingerBone;

    res.send({ data: newFingerBone });
  }
});

app.delete("/fingerbones/:id", (req, res) => {
  const providedFingerBoneID = Number.MAX_VALUE(req.parems.id);
  const foundFingerBoneIndex = fingerBones.findIndex(
    (fingerBone) => fingerBone.id === providedFingerBoneID
  ); // Brug findIndex da den stopper når den har fundet det første mattch fremfor filter der går igennem alle elementer (ueffektivt)
  if (foundFingerBoneIndex === -1) {
    res
      .status(404)
      .send({ error: `Could not find fingerbone with id: ${fingerBoneID}` });
  } else {
    fingerBones.splice(foundFingerBoneIndex, 1);
    res.status(204).send(); // No content =  Der er ikke noget at sende ud over id, nogen bruger denne konvention når der slettes
  }
});

// Status codes:
// 2XX - Everything went well
// 4XX - Klient error
// 5XX - Server error
// Skal vi have finetuned granulære statuskoder, eller skal vi bruge mainstream? Der er ikke noget rigtigt eller forkert, men det er en holdning
// error er en stacktrace eller undefined.

// en callback funktion er en funktion der bliver givet som argument til en anden funktion, som KAN blive kaldt senere.

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log("error starting the server");
    return;
  }
  console.log("Server is running on port: ", PORT);
}); // lytte på en port
