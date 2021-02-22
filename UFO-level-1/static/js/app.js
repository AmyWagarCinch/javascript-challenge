// from data.js
var tableData = data;
function createTable(data){
// YOUR CODE HERE!
// Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
data.forEach(function(ufoReport) {
    //console.log(weatherReport);
   var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);
      // Append a cell to the row for each value
     // in the weather report object
     var cell = row.append("td");
          cell.text(value);
   });
 });
}

createTable(tableData);
