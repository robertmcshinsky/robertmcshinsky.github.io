const express = require("express");
const app = express();
const path = require("path");
/////
let allAppointments;
/////
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));
const port = process.env.PORT || 3000;
////
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
////

////////////////////////////////
app.use((req, res) => {
  res.status(404).end();
});

app.listen(port, function () {
  console.log("Listening on port ", port);
});
