let colArray = new Array();
let fcolArray = new Array();
class CrimeData extends DataSet{
	callDataSet(){
		var fileName='CrimePriorData.csv';
		var fileId='CPPS';
		new DataSet().loadDataSet(fileName,fileId);
	}

 tableCreate(dataframe,dataList,columnRow) {
	$(document).ready( function () {

		
    
	var displayTable = "<br/> <table id='dataTable' class='table table-striped table-bordered' align='left' style=' display:block; overflow: auto; overflow-x: visible;' cellspacing='0' width=100% height='500'><thead><tr>";
	
	for (var i =0; i < columnRow.length; i++) {
		displayTable+= "<th>" +columnRow[i]+ "</th>";
	}
	displayTable+= "</tr></thead>";
	displayTable+= "<tbody>";
	for (var i = 1; i < dataList.length; i++) {
		displayTable+= "<tr>";
		for(var j=0;j<dataList[i].length;j++){
		displayTable+= "<td>" +dataList[i][j]+" </td>";
		}
		displayTable+="</tr>";
	}
	
	displayTable+="</table>";

		
	
	document.getElementById('myTable').innerHTML = displayTable;
	
			$('#dataTable').DataTable({
				"paging":   true,
				"ordering": true,
				"info":     false,
				"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
				
			});		
    });
	
	
	for (var k =0; k < columnRow.length; k++) {
		colArray[k]=columnRow[k];
	}
	this.crimeFilter();
		
	}
	


	

 	crimeFilter(){
 		var crimeDiv = document.getElementById("crimeFilter");
 		var length = crimeDiv.childNodes.length;
 		if(length==1){
 		var checkbox = null;
 		var label = null;
		for(var k=0; k<colArray.length;k++){
		checkbox= document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.value = colArray[k];
		checkbox.id = "crimeId"+k;
		label = document.createElement('label');
		label.htmlFor = "id";
		label.appendChild(document.createTextNode(colArray[k]));
		crimeDiv.appendChild(checkbox);
		crimeDiv.appendChild(label);
		}
 		}else{
 			for(var k=0; k<colArray.length;k++){
 				document.getElementById("crimeId"+k).checked=false;
 			}
 		}
 	}
 	
 	filter(){
 		
 		var tbl = document.getElementById("dataTable");
 		var check = false;
 		for(var k=0; k<colArray.length;k++){
 			if(document.getElementById("crimeId"+k).checked==true){
 				check = true;
 			}
		}
 		if(check){
 		for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                tbl.rows[i].cells[j].style.display = "";
                if (!(document.getElementById("crimeId"+j).checked))
                    tbl.rows[i].cells[j].style.display = "none";
            }
        }
 		}
 	}
}

class Rowdata extends DataSet{
	callDataSet(){
		var fileName='CrimePriorData.csv';
		var fileId='CPPS';
		
		new DataSet().filterrow(fileName,fileId);
		}
 
 tableCreate(dataframe,dataList,columnRow) {
	$(document).ready( function () {

		
    
	var displayTable = "<br/> <table id='dataTable' class='table table-striped table-bordered' align='left' style=' display:block; overflow: auto; overflow-x: visible;' cellspacing='0' width=100% height='500'><thead><tr>";
	
	for (var i =0; i < columnRow.length; i++) {
		displayTable+= "<th>" +columnRow[i]+ "</th>";
	}
	displayTable+= "</tr></thead>";
	displayTable+= "<tbody>";
	for (var i = 1; i < dataList.length; i++) {
		displayTable+= "<tr>";
		for(var j=0;j<dataList[i].length;j++){
		displayTable+= "<td>" +dataList[i][j]+" </td>";
		}
		displayTable+="</tr>";
	}
	
	displayTable+="</table>";

		
	
	document.getElementById('myTable').innerHTML = displayTable;
	
			$('#dataTable').DataTable({
				"paging":   true,
				"ordering": true,
				"info":     false,
				"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
				
			});		
    });
	
	
	for (var k =0; k < columnRow.length; k++) {
		fcolArray[k]=columnRow[k];
	}
	this.crimeFilter();
		
	}
	


	

 	crimeFilter(){
 		var crimeDiv = document.getElementById("crimeFilter");
 		var length = crimeDiv.childNodes.length;
 		if(length==1){
 		var checkbox = null;
 		var label = null;
		for(var k=0; k<fcolArray.length;k++){
		checkbox= document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.value = fcolArray[k];
		checkbox.id = "crimeId"+k;
		label = document.createElement('label');
		label.htmlFor = "id";
		label.appendChild(document.createTextNode(fcolArray[k]));
		crimeDiv.appendChild(checkbox);
		crimeDiv.appendChild(label);
		}
 		}else{
 			for(var k=0; k<fcolArray.length;k++){
 				document.getElementById("crimeId"+k).checked=false;
 			}
 		}
 	}
 	
 	filter(){
 		
 		var tbl = document.getElementById("dataTable");
 		var check = false;
 		for(var k=0; k<fcolArray.length;k++){
 			if(document.getElementById("crimeId"+k).checked==true){
 				check = true;
 			}
		}
 		if(check){
 		for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                tbl.rows[i].cells[j].style.display = "";
                if (!(document.getElementById("crimeId"+j).checked))
                    tbl.rows[i].cells[j].style.display = "none";
            }
        }
 		}
 	}
	
	getrowvalues(){
	var typeArr = new Array();
	var i=0;
	if(document.getElementById('oneId').checked ==true){
		typeArr[i] = document.getElementById('crimeDataLineId').value;
		i++;
	}
	if(document.getElementById('twoId').checked ==true){
		typeArr[i] = document.getElementById('twoId').value;
		i++;
	}
	
	if(document.getElementById('thousandId').checked ==true){
		typeArr[i] = document.getElementById('thousandId').value;
		
	}
	}

}

