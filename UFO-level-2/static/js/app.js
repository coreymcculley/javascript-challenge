// from data.js
var tableData = data;
console.log(tableData);
// YOUR CODE HERE!

// Select the table body so we can input the UFO siting data
var tbody = d3.select("tbody");

//Loop Through `data` and log each UFO report
function renderTable(data1){   
    
    data1.forEach(ufoData => {
    //console.log(ufoData);

    // Append a new row for each row of UFO data
    var row = tbody.append("tr");

    // Log each UFO report value and add data to the table
    Object.entries(ufoData).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        });
    });
};    
//HTML now has table for filtering
renderTable(tableData);

//Get input from the text box, filter for the matching dates and output table of results. 
//Also include an error popup if searched data does not match the anything in the provided data.

var button = d3.select("#filter-btn");
button.on("click", function() {
    filteredData = [];
    d3.event.preventDefault();
    //Filter by date
    var inputElementDate = d3.select("#datetime");
    // Get the value property of the input element
    var inputValueDate = inputElementDate.property("value");
    console.log(inputValueDate);
    if (inputValueDate){
        var filteredDataDate = tableData.filter(ufoData => ufoData.datetime === inputValueDate);
}
    else{
        var filteredDataDate = tableData;
    }
    //Filter by city
    var inputElementCity = d3.select("#city");
    // Get the value property of the input element
    var inputValueCity = inputElementCity.property("value");
    console.log(inputValueCity);
    if (inputValueCity){
        var filteredDataCity = filteredDataDate.filter(ufoData => ufoData.city.toLowerCase() === inputValueCity.toLowerCase());
    }
    else{
        var filteredDataCity = filteredDataDate;
    }
    //Filter by state
    var inputElementState = d3.select("#state");
    // Get the value property of the input element
    var inputValueState = inputElementState.property("value");
    console.log(inputValueState);
    if (inputValueState){
        var filteredDataState = filteredDataCity.filter(ufoData => ufoData.state.toLowerCase() === inputValueState.toLowerCase());
    }
    else{
        var filteredDataState = filteredDataCity;
    }
    //Filter by Country
    var inputElementCountry = d3.select("#country");
    // Get the value property of the input element
    var inputValueCountry = inputElementCountry.property("value");
    console.log(inputValueCountry);
    if (inputValueCountry){
        var filteredDataCountry = filteredDataState.filter(ufoData => ufoData.country.toLowerCase() === inputValueCountry.toLowerCase());
    }
    else{
        var filteredDataCountry = filteredDataState;
    }    
    //Filter by Shape
    var inputElementShape = d3.select("#shape");
    // Get the value property of the input element
    var inputValueShape = inputElementShape.property("value");
    console.log(inputValueShape);
    if (inputValueShape){
        var filteredDataShape = filteredDataCountry.filter(ufoData => ufoData.shape.toLowerCase() === inputValueShape.toLowerCase());
}
    else{
        var filteredDataShape = filteredDataCountry;
    }    
    
    //Output Filtered Table
    if (Object.keys(filteredDataShape).length === 0){
        errorPopup();
    }
    else {
        clearTable();
        renderTable(filteredDataShape);
    }
});



function clearTable(){
    var tableHeaderRowCount = 1;
    var table = document.getElementById('ufo-table');
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
};

function errorPopup() {
    alert("Filter did not match any UFO report");
};