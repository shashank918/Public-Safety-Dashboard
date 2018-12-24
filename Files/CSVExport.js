/**
 * 
 */
class CSVExport{
	
	constructor(){
		
	}
	exportCSV(data){
		switch(data){
		case  'crimeData':
			return 'CrimePriorData.csv';
			break;
		case  'policeStationData':
			return 'Police_Stations.csv';
		break;
		case  'fireStationData':
			return 'Fire_Stations.csv';
		break;
		case  'lifeSafetyData':
			return 'Life_Safety_Evaluations.csv';
		break;
		case  'publicHealthData':
			return 'Public_Health_Statistics.csv';
		break;
			
		}
	}
}