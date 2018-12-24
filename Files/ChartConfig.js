/**
 * 
 */
class ChartConfig{
	
	LineChart(chartType){
		switch(chartType){
		case "crimeDataLineChart":
				var fileName = "CrimePriorData.csv";
				new Line().createCanvas(fileName,9,10,chartType);
				break;
		case "policeStationLineChart":
				var fileName = "Police_Stations.csv";
				new Line().createCanvas(fileName,1,12,chartType);
				break;
		case "fireStationLineChart":
				var fileName = "Fire_Stations.csv";
				new Line().createCanvas(fileName,0,7,chartType);
				break;
		case "lifeSafetyLineChart":
				var fileName = "Life_Safety_Evaluations.csv";
				new Line().createCanvas(fileName,2,13,chartType);
				break;
		case "publicHealthServiceLineChart":
				var fileName = "Public_Health_Statistics.csv";
				new Line().createCanvas(fileName,0,7,chartType);
				break;
		}
	}
	
	BarChart(chartType){
		switch(chartType){
		case "crimeDataBarChart":
				var fileName = "CrimePriorData.csv";
				new Bar().createCanvas(fileName,9,10,chartType);
		break;
		case "policeStationBarChart":
				var fileName = "Police_Stations.csv";
				new Bar().createCanvas(fileName,1,12,chartType);
		break;
		case "fireStationBarChart":
				var fileName = "Fire_Stations.csv";
				new Bar().createCanvas(fileName,0,7,chartType);
		break;
		case "lifeSafetyBarChart":
				var fileName = "Life_Safety_Evaluations.csv";
				new Bar().createCanvas(fileName,2,13,chartType);
		break;
		case "publicHealthServiceBarChart":
				var fileName = "Public_Health_Statistics.csv";
				new Bar().createCanvas(fileName,0,7,chartType);
		break;
		}
	}

	
	PieChart(chartType){
	switch(chartType){
	case "crimeDataPieChart":
			var fileName = "CrimePriorData.csv";
			new Pie().createCanvas(fileName,9,10,chartType);
	break;
	case "policeStationPieChart":
			var fileName = "Police_Stations.csv";
			new Pie().createCanvas(fileName,1,12,chartType);
	break;
	case "fireStationPieChart":
			var fileName = "Fire_Stations.csv";
			new Pie().createCanvas(fileName,0,7,chartType);
	break;
	case "lifeSafetyPieChart":
			var fileName = "Life_Safety_Evaluations.csv";
			new Pie().createCanvas(fileName,2,13,chartType);
	break;
	case "publicHealthServicePieChart":
			var fileName = "Public_Health_Statistics.csv";
			new Pie().createCanvas(fileName,0,7,chartType);
	break;
		}
	}
	
	PolarChart(chartType){
		switch(chartType){
		case "crimeDataPolarChart":
				var fileName = "CrimePriorData.csv";
				new Polar().createCanvas(fileName,9,10,chartType);
		break;
		case "policeStationPolarChart":
				var fileName = "Police_Stations.csv";
				new Polar().createCanvas(fileName,1,12,chartType);
		break;
		case "fireStationPolarChart":
				var fileName = "Fire_Stations.csv";
				new Polar().createCanvas(fileName,0,7,chartType);
		break;
		case "lifeSafetyPolarChart":
				var fileName = "Life_Safety_Evaluations.csv";
				new Polar().createCanvas(fileName,2,13,chartType);
		break;
		case "publicHealthServicePolarChart":
				var fileName = "Public_Health_Statistics.csv";
				new Polar().createCanvas(fileName,0,7,chartType);
		break;
		}
	}
	
	
	DoughnutChart(chartType){
		switch(chartType){
		case "crimeDataDoughnutChart":
				var fileName = "CrimePriorData.csv";
				new Doughnut().createCanvas(fileName,4,9,chartType);
		break;
		case "policeStationDoughnutChart":
				var fileName = "Police_Stations.csv";
				new Doughnut().createCanvas(fileName,0,11,chartType);
		break;
		case "fireStationDoughnutChart":
				var fileName = "Fire_Stations.csv";
				new Doughnut().createCanvas(fileName,0,7,chartType);
		break;
		case "lifeSafetyDoughnutChart":
				var fileName = "Life_Safety_Evaluations.csv";
				new Doughnut().createCanvas(fileName,2,13,chartType);
		break;
		case "publicHealthServiceDoughnutChart":
				var fileName = "Public_Health_Statistics.csv";
				new Doughnut().createCanvas(fileName,0,7,chartType);
		break;
		}
	}
	
}
	