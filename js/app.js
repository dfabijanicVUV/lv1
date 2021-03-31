function Submit()
{
	var nazivPredmeta = document.getElementById("fname").value;
	var godina = document.getElementById("lname").value;
	var ects = document.getElementById("ects").value;
	
	var table = document.getElementById("table");
	var row = table.insertRow(1);
    var cel1 = row.insertCell(0);
    var cel2 = row.insertCell(1);
    var cel3 = row.insertCell(2);
	
	cel1.innerHTML = nazivPredmeta;
	cel2.innerHTML = godina;
	cel3.innerHTML = ects;
	 
}	