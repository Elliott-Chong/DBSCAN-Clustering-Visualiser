// import { Series, DataFrame } from "pandas-js";
// import "pandas-js";

document.getElementById("fileUpload").addEventListener("change", async (e) => {
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
        console.log(csvToArray(result));
        document.getElementById("test").innerHTML = result;
        return csvToArray(result);
      }
      // Check image if it is the same
      // document.getElementById("text-box").value = result;
      const response = await fetch("./private/check.txt");

      console.log(await response.json());
    };
  }
});

function csvToArray(str, delimiter = ",") {
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");

  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });
  return arr;
}

function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.select();
  document.execCommand("copy");
}
