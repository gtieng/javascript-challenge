// from data.js
var tableData = data;

// YOUR CODE HERE!

// inspect the HTML and select elements for interaction (button and table)
var button = d3.select("#filter-btn");
var body = d3.select("tbody");

// code for when button is clicked
button.on("click", function() {

    // inspect the HTML and locate the form id
    var input = d3.select("#datetime");

    // get the value of the entered form
    var value = input.property("value"); 

    //filter through the data for matches to entered datetime value
    var filteredData = tableData.filter(i => i.datetime === value);
    
    //loop through object
    filteredData.forEach( (entry) => {
        //add a new row for each object in the dataset
        var row = body.append("tr");

        //within each row, add a cell and fill it with the value
        Object.entries(entry).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});