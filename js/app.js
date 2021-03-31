function Submit() {
	var nazivPredmeta = document.getElementById("fname").value;
	var godina = document.getElementById("lname").value;
	var ects = document.getElementById("ects").value;
	
	var table = document.getElementById("table");
	var row = table.insertRow(1);
    var cel1 = row.insertCell(0);
    var cel2 = row.insertCell(1);
    var cel3 = row.insertCell(2);
	var cel4 = row.insertCell(3);
	var cel5 = row.insertCell(4);

	cel1.innerHTML = nazivPredmeta;
	cel2.innerHTML = godina;
	cel3.innerHTML = ects;
	cel4.innerHTML = '<button onclick="Delete(this)" style="background: url(images/trash-alt-regular.svg)">s</button>' ;
	cel5.innerHTML = '<input onclick="Color(this)" type="checkbox" id="checkDone" name="checkDone">' 
}	

function Delete(r) {
	var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}

function Color(r) {
	var i = r.parentNode.parentNode;
	if(r.checked)
	{
		i.setAttribute('style', 'background: yellow');
	}
	else
	{
		i.setAttribute('style', 'background: white');
	}
}

function Search() {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("table");
	tr = table.getElementsByTagName("tr");
  
	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
	  td = tr[i].getElementsByTagName("td")[0];
	  if (td) {
		txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
		  tr[i].style.display = "";
		} else {
		  tr[i].style.display = "none";
		}
	  }
	}
  }