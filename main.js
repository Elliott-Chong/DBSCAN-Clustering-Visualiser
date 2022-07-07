document.getElementById("fileUpload").addEventListener("change", async (e) => {
  document.getElementById(
    "scatterPoints"
  ).innerHTML = `<g opacity="0.5" id="clusterRegion"></g>`;
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

function startDBSCAN() {
  if (document.getElementById("scatterPoints").children.length <= 1) {
    alert("no data points found");
    return;
  }
  // console.log(JSON.parse(localStorage.getItem("dataset")));
  var dataset = JSON.parse(localStorage.getItem("dataset"));
  var dotList = [
    ...document.getElementById("scatterPoints").getElementsByClassName("dot"),
  ];
  var randomPoint = getRandom(dotList);
  console.log(randomPoint.getAttribute("cx"), randomPoint.getAttribute("cy"));
  // for (var i of dotList) {
  //   console.log(i);
  // }
}