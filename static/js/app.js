// from data.js
var tableData = data;

// YOUR CODE HERE!

// inspect the HTML and select the button element with d3
var button = d3.select("#filter-btn");


// code for when button is clicked
button.on("click", function() {

    // inspect the HTML and locate the form id
    var input = d3.select("#datetime");

    // get the value of the entered form
    var value = input.property("value"); 

    //filter through the data for matches to entered datetime value
    var filteredData = tableData.filter(i => i.datetime === value);
});