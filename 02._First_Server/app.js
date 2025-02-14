// main filen hedder "app.js" efter konventionen. Entry point til kodebase, server.
// her skriver vi vores server kode.

const express = require("express"); // importerer express.

const app = express(); // initialiserer express.

app.use(express.json()); // utility metode i biblioteket, der inkluderer body parsing. Hvis man får "undifned" når man requester body, kan det være fordi den ikke kan parse body.

// Der er to måder at sende data på i et get request. En path og

// Get route:
app.get("/", (req, res) => {
  // endpoint, request response (server klient modellen)
  res.send({ data: "This is the root route" }); // JS objekt som bliver konverteret til json.
});

app.get("/blablabla", (req, res) => {
  res.send({ data: "Blablabla" });
});

app.get("/yourfavouritenumber/:favouriteNumber", (req, res) => {
  // pathvariabler skrives med kolon sådan :pathvariabel
  res.send({ data: `your favourite number is: ${req.params.favouriteNumber}` });
});

// exress sørger for at køre endpointet??? med req og res
// ctrl + c for at stoppe serveren

app.get("/favouritethings/:favouriteflower/:favouriteanimal", (req, res) => {
  res.send({
    data: `your favourite flower is: ${req.params.favouriteflower}  and your favourite animal is: ${req.params.favouriteanimal}`,
  });
});

app.get("/search", (req, res) => {
  console.log(req.query);
  res.send({ data: `you searched for: ${req.query.q}` });
});

// localhost:8085/search?q=search%20string

// Der kan ikke testes i browser på post, da det kun er get requests man kan teste
app.post("/favoritepoliticians", (req, res) => {
  console.log(req.body);
  res.send({ data: req.body });
});

// Hvordan sender man data med en body? Gør det i fritiden

app.post("/senddata", (req, res) => {
    res.send({ data: "blabla"}) // I gamle dage skulle man sende som JSON med res.sjon, men send kan selv konvertere til json, og sætte de rigtige headers.
})

// Hvorfor er det ikke et REST API?
// Følger ikke korrekt navngivning bl.a.

// porten - hvilken skal den lytte på:
app.listen(8085); // denne skal ligge i bunden af filen. Der kan opstå problemer hvis den ikke ligger i bunden.
