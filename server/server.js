const express = require("express");
const app = express();
const fs = require("fs");
const csv = require("csv-parser");
const cors = require("cors");
const secret_key = require("./config");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  // file_path is relative to the root dir of this project, not server
  const file_path = "./density_bars.csv";

  let points = [];
  fs.createReadStream(file_path)
    .pipe(csv())
    .on("data", function (data) {
      points.push({ x: parseFloat(data.x), y: parseFloat(data.y) });
    })
    .on("end", () => {
      return res.json(points);
    });
});

console.log(secret_key);
app.get("/123", (req, res) => {
  // file_path is relative to the root dir of this project, not server
  const file_path = "./density_bars.csv";

  let points = [];
  fs.createReadStream(file_path)
    .pipe(csv())
    .on("data", function (data) {
      points.push({ x: parseFloat(data.x), y: parseFloat(data.y) });
    })
    .on("end", () => {
      return res.json(points);
    });
});

app.listen(5000, () => {
  console.log("server running on http://localhost:5000");
});

