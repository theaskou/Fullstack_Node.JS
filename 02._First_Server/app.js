// main filen hedder "app.js" efter konventionen. Entry point til kodebase, server. 
// her skriver vi vores server kode.

const express = require('express'); // importerer express.

const app = express(); // initialiserer express.

// Get route:
app.get("/", (req, res) => {  //path/endpoint, request response (server klient modellen)
    res.send({ data: "This is the root route"}); // JS objekt som bliver konverteret til json.
}); 

app.get("/blablabla", (req, res) => {
    res.send({ data: "Blablabla"});
});

app.get("/yourfavouritenumber/:favouriteNumber", (req, res) => { // pathvariabler skrives med kolon sådan :pathvariabel
    res.send({data: `your favourite number is: ${req.params.favouriteNumber}`});
})

// exress sørger for at køre endpointet??? med req og res
// ctrl + c for at stoppe serveren

app.get("/favouritethings/:favouriteflower/:favouriteanimal", (req, res) => {
    res.send({
        data: 
        `your favourite flower is: ${req.params.favouriteflower} and your favourite animal is: ${req.params.favouriteanimal}`
    })

})

// Hvorfor er det ikke et REST API?
// Følger ikke korrekt navngivning bl.a.
// Til næste gang: Lav et REST API med FingerBones.

// porten - hvilken skal den lytte på:
app.listen(8085); // denne skal ligge i bunden af filen. Der kan opstå problemer hvis den ikke ligger i bunden.