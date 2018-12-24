class DataSet{
	
		loadDataSet(fileName,fileId){
		var DataFrame = dfjs.DataFrame;
		DataFrame.fromCSV(fileName).then(
		df => {
			
			var columnRow = df.listColumns();
			var dataframe = new DataFrame(df);
			var dataList = df.toArray();
			switch (fileId){
			case 'FSPS':
				new FireStationData().tableCreate(dataframe,dataList,columnRow);
				break;
			case 'PSPS':
				new PoliceStationData().tableCreate(dataframe,dataList,columnRow);
				break;
			case 'CPPS':
				new CrimeData().tableCreate(dataframe,dataList,columnRow);
				break;
			case 'LSPS':
				new LifeSafetyData().tableCreate(dataframe,dataList,columnRow);
				break;
			case 'PHPS':
				new PublicHealthData().tableCreate(dataframe,dataList,columnRow);
				break;
			default :
				break;
			}
			
			df.show();
		}).catch(err => {
			    console.log(err);
			});
		}
	
		
}


