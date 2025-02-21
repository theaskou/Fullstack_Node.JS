const express = require("express");
const app = express();

console.log(new Date()); // UTC tidszone. Hvordan kan man ellers få fat i en date?
console.log(Date()); // Operativsystemets tidszone nu (CEST for mig).
console.log(Date.now()); // Unix time / Epoch (sekunder siden 1.1.1970)

// Create a route that returns current mmnth as a response body.

const months = ["January", "February", "March", "April"];

app.get("/months/v1", (req, res) => {
  const currentMonth = months[new Date().getMonth()];

  res.send({ data: currentMonth });
});

app.get("/months/v2", (req, res) => {
  const currentMonth = new Date().toLocaleDateString("en-uk", {
    month: "long",
  });
  res.send({ data: currentMonth });
});

app.get("/months/v3", (req, res) => {
  const currentMonth = Date().split(" ")[1];
  console.log(currentMonth);
  res.send({ data: currentMonth });
});

// implement /days that returns the weekday as a word

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get("/days/v1", (req, res) => {
  const currentDay = new Date().getDay();

  res.send({ data : currentDay});
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port: ", PORT));
