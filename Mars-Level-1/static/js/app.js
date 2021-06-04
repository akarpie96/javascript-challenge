// from data.js
var tableData = data;

//Select the button 

var button = d3.select("#filter-btn")

//Select the form
var form = d3.select("#form")

var clearButton= d3.select("#clear-btn")

// // Creating Event Handlers
button.on("click", runEnter)
form.on("submit", runEnter)


// Creating initial table that renders when page loads
var tbody=d3.select(".table ")
var td_selected = d3.selectAll("td")
// var inputElement= d3.select("#datetime");
tableData.forEach((Aliens) => {
    console.log(Aliens);
    var row = tbody.append("tr");
    Object.entries(Aliens).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value)
        });
  })
//Function for filtering data
function runEnter(){
    var td_selected = d3.selectAll("td")
    //Clearing functionality so that old data clears every time table is filtered. 
    td_selected.remove()
    d3.event.preventDefault();
    var inputElement= d3.select("#datetime");
    var inputValue= inputElement.property("value")
    console.log(inputValue);
  var filteredData = tableData.filter(alien => alien.datetime === inputValue);

  console.log(filteredData);

  

  // Iterating through object and appending to table
  filteredData.forEach((Aliens) => {
      console.log(Aliens);
      var row = tbody.append("tr");
      Object.entries(Aliens).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value)
          });
    });}





