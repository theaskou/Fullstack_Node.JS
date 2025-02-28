// const express = require("express"); - Vi bruger import fra nu af, da vi bruger module i dependencies. __dirname virker ikke i module. Vi skal bruge path module
import express from "express";
import path from "path";

import partiesLibraryESModules from './util/partyLibraryES.js';


// const { parties } = require("./util/partiesLibrary.js"); // Destructuring: Hiver kun det modul ud der skal bruges selvom der eksporteres flere ting her

const app = express();

app.use(express.static('public')); //app.use laver routes for filer.
// public mappen er privat indtil den defineres som static - så kan den tilgås fra klienten

let visitorCount = 0;

// I express hedder statiske filer (html filer) "public".

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/public/partypage/partypage.html");
  res.sendFile(path.resolve("public/frontpage/frontpage.html"));
});

// task: create a route that returns the visitorcount
app.get("/visitorcounts", (req, res) => {
  visitorCount++;
  res.send({ data: visitorCount });
});

app.get("/partypage", (req, res) => {
  // res.sendFile(__dirname + "/public/partypage/partypage.html");
  res.sendFile(path.resolve("public/partypage/partypage.html"));
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
// End of file EOF - tom linje - Anbefalet til at angive slutningen på filen
