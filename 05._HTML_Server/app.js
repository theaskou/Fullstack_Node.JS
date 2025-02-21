const express = require("express");
const app = express();
let visitorCount = 0;

// I express hedder statiske filer (html filer) "public".

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/frontpage.html");
});

// task: create a route that returns the visitorcount
app.get("/visitorcounts", (req, res) => {
  visitorCount++;
  res.send({ data: visitorCount });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
// End of file EOF - tom linje - Anbefalet til at angive slutningen på filen
