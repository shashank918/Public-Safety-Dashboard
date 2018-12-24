let colLifeArray = new Array();
class LifeSafetyData extends DataSet{
 callDataSet(){
		var fileName='Life_Safety_Evaluations.csv';
		var fileId='LSPS';
		new DataSet().loadDataSet(fileName,fileId);
	}

 tableCreate(dataframe,dataList,columnRow) {
		$(document).ready( function () {

		
    
	var displayTable = "<br/> <table id='ldataTable' class='table table-striped table-bordered' align='left' style=' display:block; overflow: auto; overflow-x: visible;' cellspacing='0' width=100% height='500'><thead><tr>";
	
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

		
	
	document.getElementById('Lstable').innerHTML = displayTable;
	
			$('#ldataTable').DataTable({
				"paging":   true,
				"ordering": true,
				"info":     false,
				"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
				
			});		
    });
	
	
	for (var k =0; k < columnRow.length; k++) {
		colLifeArray[k]=columnRow[k];
	}
	    this.lifeSafetyFilter();
	}
 
 lifeSafetyFilter(){
		var crimeDiv = document.getElementById("lifeSafetyFilter");
		var length = crimeDiv.childNodes.length;
		if(length==1){
		var checkbox = null;
		var label = null;
		for(var k=0; k<colLifeArray.length;k++){
		checkbox= document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.value = colLifeArray[k];
		checkbox.id = "lifeSafetyId"+k;
		label = document.createElement('label');
		label.htmlFor = "id";
		label.appendChild(document.createTextNode(colLifeArray[k]));
		crimeDiv.appendChild(checkbox);
		crimeDiv.appendChild(label);
		}
		}else{
			for(var k=0; k<colLifeArray.length;k++){
				document.getElementById("lifeSafetyId"+k).checked=false;
			}
		}
	}

	filter(){
		var tbl = document.getElementById("ldataTable");
		var check = false;
		for(var k=0; k<colLifeArray.length;k++){
			if(document.getElementById("lifeSafetyId"+k).checked==true){
				check = true;
			}
		}
		if(check){
		for (var i = 0; i < tbl.rows.length; i++) {
			for (var j = 0; j < tbl.rows[i].cells.length; j++) {
				tbl.rows[i].cells[j].style.display = "";
			if (!(document.getElementById("lifeSafetyId"+j).checked))
				tbl.rows[i].cells[j].style.display = "none";
			}
		}
		}
	}
}


class Lrowdata extends DataSet{
 callDataSet(){
		var fileName='Life_Safety_Evaluations.csv';
		var fileId='LSPS';
		new DataSet().filterrow(fileName,fileId);
	}

 tableCreate(dataframe,dataList,columnRow) {
		$(document).ready( function () {

		
    
	var displayTable = "<br/> <table id='ldataTable' class='table table-striped table-bordered' align='left' style=' display:block; overflow: auto; overflow-x: visible;' cellspacing='0' width=100% height='500'><thead><tr>";
	
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

		
	
	document.getElementById('Lstable').innerHTML = displayTable;
	
			$('#ldataTable').DataTable({
				"paging":   true,
				"ordering": true,
				"info":     false,
				"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
				
			});		
    });
	
	
	for (var k =0; k < columnRow.length; k++) {
		colLifeArray[k]=columnRow[k];
	}
	    this.lifeSafetyFilter();
	}
 
 lifeSafetyFilter(){
		var crimeDiv = document.getElementById("lifeSafetyFilter");
		var length = crimeDiv.childNodes.length;
		if(length==1){
		var checkbox = null;
		var label = null;
		for(var k=0; k<colLifeArray.length;k++){
		checkbox= document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.value = colLifeArray[k];
		checkbox.id = "lifeSafetyId"+k;
		label = document.createElement('label');
		label.htmlFor = "id";
		label.appendChild(document.createTextNode(colLifeArray[k]));
		crimeDiv.appendChild(checkbox);
		crimeDiv.appendChild(label);
		}
		}else{
			for(var k=0; k<colLifeArray.length;k++){
				document.getElementById("lifeSafetyId"+k).checked=false;
			}
		}
	}

	filter(){
		var tbl = document.getElementById("ldataTable");
		var check = false;
		for(var k=0; k<colLifeArray.length;k++){
			if(document.getElementById("lifeSafetyId"+k).checked==true){
				check = true;
			}
		}
		if(check){
		for (var i = 0; i < tbl.rows.length; i++) {
			for (var j = 0; j < tbl.rows[i].cells.length; j++) {
				tbl.rows[i].cells[j].style.display = "";
			if (!(document.getElementById("lifeSafetyId"+j).checked))
				tbl.rows[i].cells[j].style.display = "none";
			}
		}
		}
	}
}



