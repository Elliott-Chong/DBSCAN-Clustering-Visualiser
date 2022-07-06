let x_range = 800;
let y_range = 800;

let points = [];
let distance_cache = new Map();

function setup() {
  createCanvas(window.innerHeight * 0.95, window.innerHeight * 0.95).parent(
    select("#canvas")
  );
  // fetch csv from server
  fetch("http://localhost:5000").then((response) => {
    response.json().then((data) => {
      for (let point of data) {
        points.push(new Point(point.x, point.y));
      }
      for (let point of points) {
        distance_cache.set(point.serialised, new Map());
        for (let other_point of points) {
          let distance = dist(point.x, point.y, other_point.x, other_point.y);
          distance_cache
            .get(point.serialised)
            .set(other_point.serialised, distance);
        }
      }
    });
  });
  frameRate(60);
}

function draw() {
  background(0);
  // draw axis
  //   push();
  //   stroke(100);
  //   strokeWeight(1);
  //   line(0, height / 2, width, height / 2);
  //   line(width / 2, 0, width / 2, height);
  //   stroke(255);
  //   textAlign(CENTER);
  //   // x label
  //   text(0, 15, height / 2 - 5);
  //   text(x_range.toString(), width - 15, height / 2 - 5);
  //   // y label
  //   text(y_range.toString(), width / 2 + 10, 15);
  //   text(0, width / 2 + 15, height - 10);
  //   pop();

  if (points.length == 0) return;
  for (let i = 0; i < points.length; i++) {
    points[i].show();
  }
}
const distFunc = (point, other_point) => {
  return distance_cache.get(point.serialised).get(other_point.serialised);
};
// const serialise = (point) => {
//   return point.x.toString() + "-" + point.y.toString();
// };
// const deserialise = (str) => {
//   let res = { x: null, y: null };
//   let s = str.split("-");
//   res.x = parseFloat(s[0]);
//   res.y = parseFloat(s[1]);
//   return res;
// };
const DBSCAN = (points, distFunc, epsilon, minPts) => {
  let label = new Map();
  let cluster_counter = 0;
  for (let point of points) {
    if (label.has(point.serialised)) continue;
    let neighbours = point.getNeighbours(distFunc, epsilon);
    if (neighbours.length < minPts) {
      label.set(point.serialised, "noise");
      continue;
    }
    cluster_counter++;
    label.set(point.serialsed, cluster_counter.toString());
    while (neighbours.length != 0) {
      for (let neighbour of neighbours) {
        if (label.get(neighbour.serialised) == "noise") {
          label.set(neighbour.serialised, cluster_counter);
        } else if (label.get(neighbour.serialised)) {
        }
      }
    }
  }
};
