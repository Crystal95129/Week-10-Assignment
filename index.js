//Create the function to add a new row of information using the form. 

let number = document.querySelector('#tableNumber');
let islandname = document.querySelector('#tableIslandname');
let islandpopulation = document.querySelector('#tableIslandpopulation');
let islandsize = document.querySelector('#tableIslandsize');
let table = document.querySelector('table');

function addIntoTable() {
    let row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    cell1.innerHTML = number.value;
    cell2.innerHTML = islandname.value;
    cell3.innerHTML = islandpopulation.value;
    cell4.innerHTML = islandsize.value;
}