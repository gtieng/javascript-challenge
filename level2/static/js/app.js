// from data.js
var tableData = data;

// YOUR CODE HERE!

// inspect the HTML and select elements for interaction (button and table)
var button = d3.select("#filter-btn");
var body = d3.select("tbody");

// code for when button is clicked
button.on("click", function() {

    // inspect the HTML and locate the form id
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // get the value of the entered form
    var valueDate = inputDate.property("value");
    var valueCity = inputCity.property("value");
    console.log(valueCity);
    var valueState = inputState.property("value"); 
    var valueCountry = inputCountry.property("value"); 
    var valueShape = inputShape.property("value"); 

    //filter through the data for matches to entered datetime value
    var filteredDate = tableData.filter(i => i.datetime === valueDate);
    var filteredCity = tableData.filter(i => i.city === valueCity);
    var filteredState = tableData.filter(i => i.state === valueState);
    var filteredCountry = tableData.filter(i => i.country === valueCountry);
    var filteredShape = tableData.filter(i => i.shape === valueShape);
    
    var holder = [];

    for (let i = 0; i < filteredDate.length; i++) {
        holder.push(filteredDate[i]);
    };

    for (let i = 0; i < filteredCity.length; i++) {
        holder.push(filteredCity[i]);
    };

    for (let i = 0; i < filteredState.length; i++) {
        holder.push(filteredState[i]);
    };

    for (let i = 0; i < filteredCountry.length; i++) {
        holder.push(filteredCountry[i]);
    };

    for (let i = 0; i < filteredShape.length; i++) {
        holder.push(filteredShape[i]);
    };

    var dupeHolder = [];

    for (let i = 0; i < holder.length; i++) {
        if (dupeHolder.includes(holder[i])) {
            console.log("dupe");
        } else {
            dupeHolder.push(holder[i]);
        };
    };

    if (valueDate == "") {
        console.log("date null");
    } else {
        var dupeHolder = dupeHolder.filter(i => i.datetime === valueDate);
    }; 

    if (valueCity == "") {
        console.log("city null");
    } else {
        var dupeHolder = dupeHolder.filter(i => i.city === valueCity);
    }; 

    if (valueState == "") {
        console.log("state null");
    } else {
        var dupeHolder = dupeHolder.filter(i => i.state === valueState);
    }; 

    if (valueCountry == "") {
        console.log("country null");
    } else {
        var dupeHolder = dupeHolder.filter(i => i.country === valueCountry);
    }; 

    if (valueShape == "") {
        console.log("shape null");
    } else {
        var dupeHolder = dupeHolder.filter(i => i.shape === valueShape  );
    }; 

    //loop through object
    dupeHolder.forEach( (entry) => {
        //add a new row for each object in the dataset
        var row = body.append("tr");

        //within each row, add a cell and fill it with the value
        Object.entries(entry).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});