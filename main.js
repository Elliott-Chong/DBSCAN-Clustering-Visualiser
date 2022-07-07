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
