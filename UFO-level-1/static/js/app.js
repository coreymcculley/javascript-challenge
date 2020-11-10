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
//filter data based on user input
button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    //console.log(inputValue);

    var filteredData = tableData.filter(ufoData => ufoData.datetime === inputValue);
    //console.log(filteredData);
    if (Object.keys(filteredData).length === 0){
        errorPopup();
    }
    else {
        clearTable();
        renderTable(filteredData);
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
    alert("Date does not match any UFO report");
};