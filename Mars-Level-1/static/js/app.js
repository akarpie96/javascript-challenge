// from data.js
var tableData = data;

//Select the button 

var button = d3.select("#filter-button")

//Select the form
var form = d3.select("#form")

// Get a reference to table body

var tbody=d3.select("#ufo-table");
// YOUR CODE HERE!
data.forEach((Aliens) => {
  console.log(Aliens);
  var row = tbody.append("tr");
  Object.entries(Aliens).forEach(function([key, value]) {
  console.log(key, value);
  var cell = row.append("td");
  cell.text(value)
      });
});