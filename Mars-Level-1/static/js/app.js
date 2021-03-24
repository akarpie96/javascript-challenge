// from data.js
var tableData = data;

//Select the button 

var button = d3.select("#filter-btn")

//Select the form
var form = d3.select("#form")

button.on("click", runEnter)
form.on("submit", runEnter)


//Creating Event Handlers
//  Get a reference to table body
// var tbody=d3.select("#ufo-table");
// // YOUR CODE HERE!
// data.forEach((Aliens) => {
//   console.log(Aliens);
//   var row = tbody.append("tr");
//   Object.entries(Aliens).forEach(function([key, value]) {
//   console.log(key, value);
//   var cell = row.append("td");
//   cell.text(value)
//       });
// });



function runEnter(){
    d3.event.preventDefault();
    var inputElement= d3.select("#datetime");
    var inputValue= inputElement.property("value")
    console.log(inputValue);

  var filteredData = tableData.filter(alien => alien.datetime === inputValue);

  console.log(filteredData);
  var tbody=d3.select("ufo-table")
  filteredData.forEach((Aliens) => {
      console.log(Aliens);
      var row = tbody.append("tr");
      Object.entries(Aliens).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value)
          });
    });
}
