// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

function createTable(data){
tbody.html("");
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
// This function is triggered when the button is clicked
function handleClick() {
    //console.log("A button was clicked!");
  
    // We can use d3 to see the object that dispatched the event
    ///console.log(d3.event.target);

    //prevent the page from refreshing
    ///d3.event.preventDefault();

    //select the input element and get the raw HTML node
    var selectedDate = d3.select("#datetime").node().value;
    console.log(selectedDate);

    let selectedData = tableData.filter(function(selectedDate){
        return selectedDate.datetime === selectedDate;

    });
    

    createTable(selectedData)

}
  
// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);
///FormData.on("submit", runEnter);



createTable(tableData);
