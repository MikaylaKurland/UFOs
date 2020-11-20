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