let x_range = 800;
let y_range = 800;
let label = new Map();

let label_colors;

let points = [];
let distance_cache = new Map();

let epsilon_slider;
let min_points_slider;

let epsilon;
let min_points;

function setup() {
  // set default values for epsilon and min_points
  epsilon = 1;
  min_points = 3;

  label_colors = {
    1: color(255, 0, 0),
    2: color(0, 255, 0),
    3: color(0, 0, 255),
    4: color(100, 0, 10),
    5: color(50, 30, 100),
    6: color(100, 40, 255),
    7: color(93, 255, 10),
    8: color(0, 100, 255),
    9: color(100, 30, 20),
  };
  createCanvas(window.innerHeight * 0.95, window.innerHeight * 0.95).parent(
    select("#canvas")
  );
  // // fetch csv from server
  // fetch("http://localhost:5000").then((response) => {
  //   response.json().then((data) => {
  //     for (let point of data) {
  //       points.push(new Point(point.x, point.y));
  //     }
  //     for (let point of points) {
  //       distance_cache.set(point.serialised, new Map());
  //       for (let other_point of points) {
  //         let distance = dist(point.x, point.y, other_point.x, other_point.y);
  //         distance_cache
  //           .get(point.serialised)
  //           .set(other_point.serialised, distance);
  //       }
  //     }
  //     DBSCAN(points, distFunc, epsilon, min_points);
  //   });
  // });
  // hongyu stuff
  document
    .getElementById("fileUpload")
    .addEventListener("change", async (e) => {
      if (e.target.files.length < 0) {
        return;
      }
      for (var i of e.target.files) {
        var fr = new FileReader();
        fr.readAsText(i);
        fr.onload = async function () {
          var result = fr.result.toString(16);
          // Get data
          if (i.type.search("text/csv") != -1) {
            var arr = csvToArray(result);
            localStorage.setItem("dataset", JSON.stringify(arr));
            points = [];
            for (var point of arr) {
              points.push(new Point(point.x, point.y));
            }
            for (let point of points) {
              distance_cache.set(point.serialised, new Map());
              for (let other_point of points) {
                let distance = dist(
                  point.x,
                  point.y,
                  other_point.x,
                  other_point.y
                );
                distance_cache
                  .get(point.serialised)
                  .set(other_point.serialised, distance);
              }
            }
            DBSCAN(points, distFunc, epsilon, min_points);
            return;
          }
          // Check image if it is the same
          // document.getElementById("text-box").value = result;
          const response = await fetch("./private/check.txt");

          console.log(await response.json());
        };
      }
    });
  frameRate(60);
  epsilon_slider = select("#epsilon");
  epsilon_slider.input(() => {
    epsilon = epsilon_slider.value();
    select("#epsilonShow").html(epsilon);
  });

  min_points_slider = select("#minPoint");
  min_points_slider.input(() => {
    min_points = min_points_slider.value();
    select("#minPointShow").html(min_points);
  });

  select("#start-btn").mousePressed(() => {
    DBSCAN(points, distFunc, epsilon, min_points);
  });
}

function draw() {
  background(0);
  for (let i = 0; i < points.length; i++) {
    points[i].show();
  }
}

const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const distFunc = (point, other_point) => {
  return distance_cache.get(point.serialised).get(other_point.serialised);
};

const arrRemove = (arr, elt) => {
  arr = arr.filter((gay) => gay.serialised != elt.serialised);
};

const DBSCAN = async (points, distFunc, epsilon, minPts) => {
  epsilon *= 15;
  label = new Map();
  let cluster_counter = 0;
  for (let point of points) {
    if (label.has(point.serialised)) continue;
    let neighbours = point.getNeighbours(distFunc, epsilon);
    if (neighbours.length < minPts) {
      label.set(point.serialised, "noise");
      continue;
    }
    cluster_counter++;
    label.set(point.serialised, cluster_counter);
    for (let neighbour of neighbours) {
      if (label.get(neighbour.serialised) == "noise") {
        label.set(neighbour.serialised, cluster_counter);
      }
      if (label.has(neighbour.serialised)) {
        continue;
      }
      label.set(neighbour.serialised, cluster_counter);
      let neighbour_neighbours = neighbour.getNeighbours(distFunc, epsilon);
      if (neighbour_neighbours.length >= minPts) {
        for (let i of neighbour_neighbours) {
          neighbours.push(i);
        }
      }
    }
  }
};
