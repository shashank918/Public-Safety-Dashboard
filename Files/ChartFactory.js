/**
 * 
 */
class ChartFactory {
	constructor(fileName,typeArr){
		switch (fileName){
			case 'FSPS':
				this.callFireChart(typeArr);
				break;
			case 'PSPS':
				this.callPoliceChart(typeArr);
				break;
			case 'CPPS':
				this.callCrimeChart(typeArr);
				break;
			case 'LSPS':
				this.callLifeSafetyEval(typeArr);
				break;
			case 'PHPS':
				this.callPublicHealthServ(typeArr);
				break;
				default:
					break;
		
		}
		}

	callFireChart(typeArr){
		if(typeArr.includes('Line')){
			new ChartConfig().LineChart("fireStationLineChart");
		}
		if(typeArr.includes('Bar')){
			new ChartConfig().BarChart("fireStationBarChart");
		}
		if(typeArr.includes('Pie')){
			new ChartConfig().PieChart("fireStationPieChart");
		}
		if(typeArr.includes('Doughnut')){
			new ChartConfig().DoughnutChart("fireStationDoughnutChart");
		}
		if(typeArr.includes('Polar')){
			new ChartConfig().PolarChart("fireStationPolarChart");
		}
	}
	
	callPoliceChart(typeArr){
		if(typeArr.includes('Line')){
			new ChartConfig().LineChart("policeStationLineChart");
		}
		if(typeArr.includes('Bar')){
			new ChartConfig().BarChart("policeStationBarChart");
		}
		if(typeArr.includes('Pie')){
			new ChartConfig().PieChart("policeStationPieChart");
		}
		if(typeArr.includes('Doughnut')){
			new ChartConfig().DoughnutChart("policeStationDoughnutChart");
		}
		if(typeArr.includes('Polar')){
			new ChartConfig().PolarChart("policeStationPolarChart");
		}
	}
	

	callCrimeChart(typeArr){
		if(typeArr.includes('Line')){
			new ChartConfig().LineChart("crimeDataLineChart");
		}
		if(typeArr.includes('Bar')){
			new ChartConfig().BarChart("crimeDataBarChart");
		}
		if(typeArr.includes('Pie')){
			new ChartConfig().PieChart("crimeDataPieChart");
		}
		if(typeArr.includes('Doughnut')){
			new ChartConfig().DoughnutChart("crimeDataDoughnutChart");
		}
		if(typeArr.includes('Polar')){
			new ChartConfig().PolarChart("crimeDataPolarChart");
		}
	}
	callLifeSafetyEval(typeArr){
		if(typeArr.includes('Line')){
			new ChartConfig().LineChart("lifeSafetyLineChart");
		}
		if(typeArr.includes('Bar')){
			new ChartConfig().BarChart("lifeSafetyBarChart");
		}
		if(typeArr.includes('Pie')){
			new ChartConfig().PieChart("lifeSafetyPieChart");
		}
		if(typeArr.includes('Doughnut')){
			new ChartConfig().DoughnutChart("lifeSafetyDoughnutChart");
		}
		if(typeArr.includes('Polar')){
			new ChartConfig().PolarChart("lifeSafetyPolarChart");
		}
	}callPublicHealthServ(typeArr){
		if(typeArr.includes('Line')){
			new ChartConfig().LineChart("publicHealthServiceLineChart");
		}
		if(typeArr.includes('Bar')){
			new ChartConfig().BarChart("publicHealthServiceBarChart");
		}
		if(typeArr.includes('Pie')){
			new ChartConfig().PieChart("publicHealthServicePieChart");
		}
		if(typeArr.includes('Doughnut')){
			new ChartConfig().DoughnutChart("publicHealthServiceDoughnutChart");
		}
		if(typeArr.includes('Polar')){
			new ChartConfig().PolarChart("publicHealthServicePolarChart");
		}
	}
}