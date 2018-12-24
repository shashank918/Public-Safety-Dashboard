let colPoliceArray = new Array();
let pcolPoliceArray = new Array();
class PoliceStationData extends DataSet{
 callDataSet(){
		var fileName='Police_Stations.csv';
		var fileId='PSPS';
		new DataSet().loadDataSet(fileName,fileId);
	}

 tableCreate(dataframe,dataList,columnRow) {
		$(document).ready( function () {

		
    
	var displayTable = "<br/> <table id='pdataTable' class='table table-striped table-bordered' align='left' style=' display:block; overflow: auto; overflow-x: visible;' cellspacing='0' width=100% height='500'><thead><tr>";
	
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

		
	
	document.getElementById('PoliceTable').innerHTML = displayTable;
	
			$('#pdataTable').DataTable({
				"paging":   true,
				"ordering": true,
				"info":     false,
				"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
				
			});		
    });
	
	
	for (var k =0; k < columnRow.length; k++) {
		colPoliceArray[k]=columnRow[k];
	}

	

	    this.policeStationFilter();
	}
 
 policeStationFilter(){
		var crimeDiv = document.getElementById("policeStationFilter");
		var length = crimeDiv.childNodes.length;
		if(length==1){
		var checkbox = null;
		var label = null;
		for(var k=0; k<colPoliceArray.length;k++){
		checkbox= document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.value = colPoliceArray[k];
		checkbox.id = "policeStationId"+k;
		label = document.createElement('label');
		label.htmlFor = "id";
		label.appendChild(document.createTextNode(colPoliceArray[k]));
		crimeDiv.appendChild(checkbox);
		crimeDiv.appendChild(label);
		}
		}else{
			for(var k=0; k<colPoliceArray.length;k++){
				document.getElementById("policeStationId"+k).checked=false;
			}
		}
	}
 
 filter(){
		
		var tbl = document.getElementById("pdataTable");
		var check = false;
		for(var k=0; k<colPoliceArray.length;k++){
			if(document.getElementById("policeStationId"+k).checked==true){
				check = true;
			}
		}
		if(check){
		for (var i = 0; i < tbl.rows.length; i++) {
         for (var j = 0; j < tbl.rows[i].cells.length; j++) {
             tbl.rows[i].cells[j].style.display = "";
             if (!(document.getElementById("policeStationId"+j).checked))
                 tbl.rows[i].cells[j].style.display = "none";
         }
     }
		}
	}
}

class Prowdata extends DataSet{
 callDataSet(){
		var fileName='Police_Stations.csv';
		var fileId='PSPS';
		new DataSet().filterrow(fileName,fileId);
	}

 tableCreate(dataframe,dataList,columnRow) {
		$(document).ready( function () {

		
    
	var displayTable = "<br/> <table id='pdataTable' class='table table-striped table-bordered' align='left' style=' display:block; overflow: auto; overflow-x: visible;' cellspacing='0' width=100% height='500'><thead><tr>";
	
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

		
	
	document.getElementById('PoliceTable').innerHTML = displayTable;
	
			$('#pdataTable').DataTable({
				"paging":   true,
				"ordering": true,
				"info":     false,
				"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
				
			});		
    });
	
	
	for (var k =0; k < columnRow.length; k++) {
		colPoliceArray[k]=columnRow[k];
	}

	

	    this.policeStationFilter();
	}
 
 policeStationFilter(){
		var crimeDiv = document.getElementById("policeStationFilter");
		var length = crimeDiv.childNodes.length;
		if(length==1){
		var checkbox = null;
		var label = null;
		for(var k=0; k<colPoliceArray.length;k++){
		checkbox= document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.value = colPoliceArray[k];
		checkbox.id = "policeStationId"+k;
		label = document.createElement('label');
		label.htmlFor = "id";
		label.appendChild(document.createTextNode(colPoliceArray[k]));
		crimeDiv.appendChild(checkbox);
		crimeDiv.appendChild(label);
		}
		}else{
			for(var k=0; k<colPoliceArray.length;k++){
				document.getElementById("policeStationId"+k).checked=false;
			}
		}
	}
 
 filter(){
		
		var tbl = document.getElementById("pdataTable");
		var check = false;
		for(var k=0; k<colPoliceArray.length;k++){
			if(document.getElementById("policeStationId"+k).checked==true){
				check = true;
			}
		}
		if(check){
		for (var i = 0; i < tbl.rows.length; i++) {
         for (var j = 0; j < tbl.rows[i].cells.length; j++) {
             tbl.rows[i].cells[j].style.display = "";
             if (!(document.getElementById("policeStationId"+j).checked))
                 tbl.rows[i].cells[j].style.display = "none";
         }
     }
		}
	}
}





