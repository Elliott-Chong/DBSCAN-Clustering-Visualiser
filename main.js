const COLOR = [
  "red",
  "blue",
  "green",
  "yellow",
  "black",
  "purple",
  "lightslategray",
  "brown",
  "orange",
  "pink",
];

function onload() {
  localStorage.clear();
  sliderChange();
}

function sliderChange() {
  document.getElementById("epsilonValue").innerHTML = Number(
    document.getElementById("epsilon").value
  ).toFixed(2);
  document.getElementById("minPointValue").innerHTML =
    document.getElementById("minPoint").value;
}

document.getElementById("fileUpload").addEventListener("change", async (e) => {
  document.getElementById("svgCanvas").classList.remove("drawable");
  document.getElementById("toggleDraw").checked = false;
  document.getElementById(
    "scatterPoints"
  ).innerHTML = `<g id="ringRegion"></g><g opacity="0.5" id="clusterRegion"></g>`;
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
        // localStorage.setItem("dataset", JSON.stringify(arr));
        for (var points of arr) {
          document.getElementById("scatterPoints").innerHTML += `<circle
            class="dot"
            r="3.5"
            cx="${points.x}"
            cy="${points.y}"
            style="fill: white; stroke: black; stroke-width: 1px"
          ></circle>`;
        }
        return;
      }
      // Check image if it is the same
      // document.getElementById("text-box").value = result;
      const response = await fetch("./private/check.txt");

      console.log(await response.json());
    };
  }
});

function csvToArray(str, delimiter = ",") {
  let headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  headers = headers
    .join(",")
    .replace(/[\n\r]+/g, "")
    .split(",");

  let arr = rows.map(function (row) {
    let values = row.split(delimiter);
    values = values
      .join(",")
      .replace(/[\n\r]+/g, "")
      .split(",");
    if (values.join(",").length == 0) {
      return;
    }
    const el = headers.reduce(function (object, header, index) {
      object[header] = Number(values[index]);
      return object;
    }, {});
    return el;
  });
  // remove null values
  arr = arr.filter((n) => {
    return n;
  });
  return arr;
}

function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.select();
  document.execCommand("copy");
}

function getRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function distanceFunc(p1, p2) {
  return Math.sqrt(
    Math.pow(p1.cx.baseVal.value - p2.cx.baseVal.value, 2) +
      Math.pow(p1.cy.baseVal.value - p2.cy.baseVal.value, 2)
  );
}

function startDBSCAN() {
  if (document.querySelectorAll(".dot").length <= 0) {
    alert("no data points found");
    return;
  }
  document.getElementById("svgCanvas").classList.remove("drawable");
  document.getElementById("toggleDraw").checked = false;
  var eps = document.getElementById("epsilon").value;
  var minPoint = document.getElementById("minPoint").value;
  var dotList = [
    ...document.getElementById("scatterPoints").getElementsByClassName("dot"),
  ];
  DBSCANNER(dotList, distanceFunc, eps, minPoint);
  // var region = [];
  // for (var p1 of dotList) {
  //   var result = [];
  //   for (var p2 of dotList.reverse()) {
  //     if (
  //       distanceFunc(
  //         { x: p1.getAttribute("cx"), y: p1.getAttribute("cy") },
  //         { x: p2.getAttribute("cx"), y: p2.getAttribute("cy") }
  //       ) < eps
  //     ) {
  //       result.push({ x: p2.getAttribute("cx"), y: p2.getAttribute("cy") });
  //     }
  //   }
  //   region.push(result);
  // }
  // console.log(region);
  // var randomPoint = getRandom(dotList);
  // console.log(randomPoint.getAttribute("cx"), randomPoint.getAttribute("cy"));
}

function DBSCANNER(DB, distanceFunc, eps, minPts) {
  eps *= 22.5;
  let cluster = 0;
  for (let point of DB) {
    var pointClass = [...point.classList];
    pointClass.splice(pointClass.indexOf("dot"), 1);
    if (pointClass.length != 0) {
      continue;
    }
    var neighbour = RangeQuery(DB, distanceFunc, point, eps);
    if (neighbour.length < minPts) {
      point.classList.add("noise");
      continue;
    }
    cluster++;
    point.classList.add(`C${cluster}`);
    point.style.fill = COLOR[(cluster % COLOR.length) - 1];
    let seedSet = [...neighbour];
    seedSet.splice(seedSet.indexOf(point), 1);
    for (let seedPoint of seedSet) {
      if (seedPoint.classList.contains("noise")) {
        seedPoint.classList.add(`NC${cluster}`);
        seedPoint.style.fill = COLOR[(cluster % COLOR.length) - 1];
      }
      var seedClass = [...seedPoint.classList];
      seedClass.splice(seedClass.indexOf("dot"), 1);
      if (seedClass.length != 0) {
        continue;
      }
      seedPoint.classList.add(`C${cluster}`);
      seedPoint.style.fill = COLOR[(cluster % COLOR.length) - 1];
      var seedNeighbour = RangeQuery(DB, distanceFunc, seedPoint, eps);
      if (seedNeighbour.length >= minPts) {
        Array.prototype.push.apply(neighbour, seedNeighbour);
      }
    }
  }
  for (var i = 1; i <= cluster; i++) {
    for (let points of document.querySelectorAll(`.C${i}`)) {
      epsilonRing(points.cx.baseVal.value, points.cy.baseVal.value, eps, i);
    }
  }
}

function epsilonRing(x, y, eps, cluster) {
  document.getElementById("clusterRegion").innerHTML += `
              <circle
              class="eps_ball"
              cx="${x}"
              cy="${y}"
              r="${eps}"
              opacity="1"
              style="stroke: ${
                COLOR[(cluster % COLOR.length) - 1]
              }; stroke-width: 2; fill: ${COLOR[(cluster % COLOR.length) - 1]}"
            ></circle>`;
}

function RangeQuery(DB, distanceFunc, Q, eps) {
  var neighbour = [];
  for (var i of DB) {
    if (distanceFunc(Q, i) <= eps) {
      neighbour.push(i);
    }
  }
  return neighbour;
}

// draw on SVG
document
  .getElementById("svgCanvas")
  .addEventListener("mousedown", function (e) {
    if (!document.getElementById("svgCanvas").classList.contains("drawable")) {
      return;
    }
    // Get the target
    const target = e.target;
    // Get the bounding rectangle of target
    const rect = target.getBoundingClientRect();
    document.getElementById("clusterRegion").innerHTML = "";
    for (var i of document.getElementsByClassName("dot")) {
      i.removeAttribute("class");
      i.setAttribute("class", "dot");
    }
    if (target.tagName == "rect") {
      // Mouse position
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      document.getElementById("scatterPoints").innerHTML += `
        <circle
            class="dot"
            r="3.5"
            cx="${x}"
            cy="${y}"
            style="fill: white; stroke: black; stroke-width: 1px"
          ></circle>
        `;
    } else {
      const x = e.srcElement.cx.baseVal.value;
      const y = e.srcElement.cy.baseVal.value;
      document.getElementById("scatterPoints").innerHTML += `
        <circle
            class="dot"
            r="3.5"
            cx="${x}"
            cy="${y}"
            style="fill: white; stroke: black; stroke-width: 1px"
          ></circle>
        `;
    }
  });

document.getElementById("toggleDraw").addEventListener("input", () => {
  document.getElementById("svgCanvas").classList.toggle("drawable");
  if (document.getElementById("svgCanvas").classList.contains("drawable")) {
    document.getElementById("clusterRegion").innerHTML = "";
    for (var i of document.getElementsByClassName("dot")) {
      i.removeAttribute("class");
      i.setAttribute("class", "dot");
    }
  }
});

document.getElementById("saveData").addEventListener("click", () => {
  if (document.querySelectorAll(".dot").length <= 0) {
    alert("no data points found");
    return;
  }
  document.getElementById("svgCanvas").classList.remove("drawable");
  document.getElementById("toggleDraw").checked = false;
  var output = "x,y\n";
  for (let point of document.querySelectorAll(".dot")) {
    output += `${point.cx.baseVal.value},${point.cy.baseVal.value}\n`;
  }
  output = output.slice(0, -1);
  console.log(output);
  download("DBSCANData.csv", output);
});
document.getElementById("clearData").addEventListener("click", () => {
  document.getElementById("svgCanvas").classList.add("drawable");
  document.getElementById("toggleDraw").checked = true;
  document.getElementById(
    "scatterPoints"
  ).innerHTML = `<g id="ringRegion"></g><g opacity="0.5" id="clusterRegion"></g>`;
});

function download(filename, text) {
  var pom = document.createElement("a");
  pom.setAttribute(
    "href",
    "data:text/csv;charset=utf-8," + encodeURIComponent(text)
  );
  pom.setAttribute("download", filename);

  if (document.createEvent) {
    var event = document.createEvent("MouseEvents");
    event.initEvent("click", true, true);
    pom.dispatchEvent(event);
  } else {
    pom.click();
  }
}
