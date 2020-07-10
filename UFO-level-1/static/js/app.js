
const tableData = data;
const tbody = d3.select("tbody");


function buildTable(data) {
    d3.select("tbody").html("");
    data.forEach((entry) => {
        var row = d3.select("tbody").append("tr");
        Object.values(entry).forEach((value) => {
            var tableData = row.append("td");
            tableData.text(value);
        });
    })
}

function processClick() {
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    var filterDateTime = tableData;
    if (date) {
        filterDateTime = filterDateTime.filter((row) => row.datetime === date);
    }
    appendTable(filterDateTime);
}

d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);

