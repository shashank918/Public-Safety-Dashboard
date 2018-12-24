	/**
 * 
 */
class Export{
	
	exportData(dataType,dataSetName){
		var fileName='';
		switch(dataType){
			case "json":
				 fileName = new JSONExport().exportJSON(dataSetName); 
				window.open(fileName);
				break;
			case "csv":
				 fileName = new CSVExport().exportCSV(dataSetName);
				window.open(fileName);
				break;
		}
	}
}