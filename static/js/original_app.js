// import the data from data.js
const tableData = data;

// Reference the HTML table "tbody" using the <tbody> tags in our html
var tbody = d3.select("tbody");

// A function to build a table passing in the UFO sighting data
function buildTable(data) {
    tbody.html(""); //pre-clears the table so that it doesn't load pre-filtered
    
    //iterate through the data array, append a row to the html table, each value from the object to a cell
    data.forEach((dataRow) => { //iterate through the data array
        let row = tbody.append("tr"); //append a row to the table body (tbody) in HTML and add a table row
        Object.values(dataRow).forEach((val) => { //indicating that we want the values to be entered into the table one object per row
            let cell = row.append("td");
            cell.text(val); //extracts only the value from the value:key pair from the object
        });
    });

}

//a function to filter the data table
function handleClick() {
    let date = d3.select("#datetime").property("value"); //select the first element that matches our selector string "#datetime" id in the HTML tags
    //by chaining ".property("value") to the select function we are grabbing the information and holding it the "date" variable
    let filteredData = tableData; //a default filter - just setting it to the original data table. "tableData" is the variable for the original data as imported from data.js
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date); //Show only the rows where the date is equal to the date filter we created above
    };
    // Rebuild the table using the filtered data with the "buildTable" function
    // @NOTE: If no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick); // Attach an event to listen for the form button

buildTable(tableData); //makes sure the basic table loads when the page does