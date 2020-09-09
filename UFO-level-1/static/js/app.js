
var tableData = data;
var tbody = d3.select("tbody");

//build table function
function createTable(data) {
  tbody.html("");
  data.forEach((sighting) => {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
  });
}

//function to handle button click
function buttonClick() {
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  let filteredData = tableData;

  console.log(inputValue);
  console.log(tableData);

  if (inputValue) {
    filteredData = tableData.filter(sightings => sightings.datetime === inputValue);
}
console.log(filteredData);
createTable(filteredData);
}


var button = d3.select("#filter-btn");
button.on("click", buttonClick);
createTable(tableData);