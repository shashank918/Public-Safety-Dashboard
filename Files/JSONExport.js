/**
 * 
 */
class JSONExport{
	
	constructor(){
		
	}

	exportJSON(data){
		switch(data){
		case  'crimeData':
			return 'CrimeData.json';
			break;
		case  'policeStationData':
			return 'Police_Stations.json';
		break;
		case  'fireStationData':
			return 'Fire_Stations.json';
		break;
		case  'lifeSafetyData':
			return 'Life_Safety_Evaluations.json';
		break;
		case  'publicHealthData':
			return 'Public_Health_Statistics.json';
		break;
			
		}
	}
}