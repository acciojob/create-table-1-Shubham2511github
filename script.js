function insert_Row() {
    //Write your code here
	const table = document.getElementById("sampleTable");
	var newRow = table.insertRow(0);
	let newCell1 = newRow.insertCell(0);
	let newCell2 = newRow.insertCell(1);
	newCell1.innerHTML = "New Cell1";
	newCell2.innerHTML = "New Cell2";
  
  
}
