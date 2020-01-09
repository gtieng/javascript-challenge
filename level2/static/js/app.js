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
    var valueState = inputState.property("value"); 
    var valueCountry = inputCountry.property("value"); 
    var valueShape = inputShape.property("value"); 

    //filter through the data for matches to entered datetime value
    var filteredDate = tableData.filter(i => i.datetime === valueDate);
    var filteredCity = tableData.filter(i => i.city === valueCity);
    var filteredState = tableData.filter(i => i.state === valueState);
    var filteredCountry = tableData.filter(i => i.country === valueCountry);
    var filteredShape = tableData.filter(i => i.shape === valueShape);
    
    var initialPull = [filteredDate, filteredCity, filteredState, filteredCountry, filteredShape]
    var holder = [];

    // create master pull
    for (let i = 0; i < initialPull.length; i++) {
        for (let x = 0; x < initialPull[i].length; x++) {
            holder.push(initialPull[i][x]);
        };
    };

    var dupeHolder = [];

    // erase duplicates in from master pull and store in new object
    for (let i = 0; i < holder.length; i++) {
        if (dupeHolder.includes(holder[i])) {
            console.log("dupe");
        } else {
            dupeHolder.push(holder[i]);
        };
    };

    var valueSummary = [valueDate, valueCity, valueState, valueCountry, valueShape]
    var dictSummary = ["datetime", "city", "state", "country", "shape"]

    for (let i = 0; i < valueSummary.length; i++) {
        if (valueSummary[i] == "") {
            console.log(`${dictSummary[i]} null`);
        } else {
            var dupeHolder = dupeHolder.filter(x => x[dictSummary[i]] === valueSummary[i]);
        };
    };

    // if (valueDate == "") {
    //     console.log("date null");
    // } else {
    //     var dupeHolder = dupeHolder.filter(i => i["datetime"] === valueDate);
    // }; 

    // if (valueCity == "") {
    //     console.log("city null");
    // } else {
    //     var dupeHolder = dupeHolder.filter(i => i["city"] === valueCity);
    // }; 

    // if (valueState == "") {
    //     console.log("state null");
    // } else {
    //     var dupeHolder = dupeHolder.filter(i => i["state"] === valueState);
    // }; 

    // if (valueCountry == "") {
    //     console.log("country null");
    // } else {
    //     var dupeHolder = dupeHolder.filter(i => i["country"] === valueCountry);
    // }; 

    // if (valueShape == "") {
    //     console.log("shape null");
    // } else {
    //     var dupeHolder = dupeHolder.filter(i => i["shape"] === valueShape  );
    // }; 

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