// from data.js
var tableData = data;

// Get a reference to table body

var tbody=d3.select("#ufo-table");
// YOUR CODE HERE!
data.forEach(function(Aliens) {
  console.log(Aliens);
  var row = tbody.append("tr");
  Object.entries(Aliens).forEach(function([key, value]) {
  console.log(key, value);
  var cell = row.append("td");
      });
});