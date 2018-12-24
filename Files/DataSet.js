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
		
		filterrow(fileName,fileId){
		var DataFrame = dfjs.DataFrame;
		DataFrame.fromCSV(fileName).then(
		df => {
			
			var columnRow = df.listColumns();
			var dataframe = new DataFrame(df);
			var dataList = df.toArray();
			//var typeArr = this.getrowvalues();
			
			switch (fileId){
			case 'FSPS':
			    var typeArr = this.getfrowvalues();
			    var newlist = [[]];
				if (typeArr[0] == "one"){
					for(var i=0; i< dataList.length; i++){
				   if (dataList[i][4] == "60607"){
				   newlist.push(dataList[i]);
				   }
				}
				
				} 
				if (typeArr[1] == "two"){
					for(var i=0; i< dataList.length; i++){
				   if (dataList[i][4] == "60636"){
				   newlist.push(dataList[i]);
				   }
				}
				} 
				if (typeArr[2] == "thousand"){
					for(var i=0; i< dataList.length; i++){
				   if (dataList[i][4] == "60625"){
				   newlist.push(dataList[i]);
				   }
				}
				} 
				new FireStationData().tableCreate(dataframe,newlist,columnRow);
				break;
			case 'PSPS':
			    var typeArr = this.getprowvalues();
			    var newlist = [[]];
				if (typeArr[0] == "one"){
				//var newlist = dataList.slice(0,2);
				for(var i=0; i< dataList.length; i++){
				   if (dataList[i][5] == "60630"){
				   newlist.push(dataList[i]);
				   }
				}
				} 
				if (typeArr[1] == "two"){
					for(var i=0; i< dataList.length; i++){
				   if (dataList[i][5] == "60613"){
						newlist.push(dataList[i]);
				   }
				}
				} 
				if (typeArr[2] == "dist"){
					for(var i=0; i< dataList.length; i++){
				   if (dataList[i][1] == "Austin"){
						newlist.push(dataList[i]);
				   }
				}
				} 
				if (typeArr[3] == "dist1"){
					for(var i=0; i< dataList.length; i++){
				   if (dataList[i][1] == "Harrison"){
						newlist.push(dataList[i]);
				   }
				}
				}
				if (typeArr[4] == "dist2"){
					for(var i=0; i< dataList.length; i++){
				   if (dataList[i][1] == "Ogden"){
						newlist.push(dataList[i]);
				   }
				}
				}
				new PoliceStationData().tableCreate(dataframe,newlist,columnRow);
				break;
			case 'CPPS':
			    var typeArr = this.getrowvalues();
			    var newlist = [[]];
				if (typeArr[0] == "one"){
				for(var i=0; i< dataList.length; i++){
				   if (dataList[i][4] == "BATTERY"){
				   newlist.push(dataList[i]);
				   }
				}
				} 
				if (typeArr[1] == "two"){
					for(var i=0; i< dataList.length; i++){
				   if (dataList[i][4] == "MOTOR VEHICLE THEFT"){
				   newlist.push(dataList[i]);
				   }
					}
				} 
				if (typeArr[2] == "thousand"){
					for(var i=0; i< dataList.length; i++){
				   if (dataList[i][4] == "CRIMINAL DAMAGE"){
				   newlist.push(dataList[i]);
				   }
					}
				} 
				if (typeArr[3] == "street"){
					for(var i=0; i< dataList.length; i++){
				   if (dataList[i][6] == "STREET"){
				   newlist.push(dataList[i]);
				   }
					}
				}
				if (typeArr[4] == "residence"){
					for(var i=0; i< dataList.length; i++){
				   if (dataList[i][6] == "RESIDENCE"){
				   newlist.push(dataList[i]);
				   }
					}
				}
				new CrimeData().tableCreate(dataframe,newlist,columnRow);
				break;
			case 'LSPS':
			    var typeArr = this.getlrowvalues();
			    var newlist = [[]];
				if (typeArr[0] == "one"){
				 for(var i=0; i< dataList.length; i++){
				   if (dataList[i][9] == "Sprinkled"){
				   newlist.push(dataList[i]);
				   }
					}
				} 
				if (typeArr[1] == "two"){
					for(var i=0; i< dataList.length; i++){
				   if (dataList[i][9] == "Passed"){
				   newlist.push(dataList[i]);
				   }
					}
				} 
				if (typeArr[2] == "thousand"){
					for(var i=0; i< dataList.length; i++){
				   if (dataList[i][9] == "FAILED"){
				   newlist.push(dataList[i]);
				   }
					}
				} 
				new LifeSafetyData().tableCreate(dataframe,newlist,columnRow);
				break;
			case 'PHPS':
			    var typeArr = this.getpurowvalues();
			    var newlist = [[]];
				if (typeArr[0] == "one"){
					for(var i=0; i< dataList.length; i++){
				   if (parseInt(dataList[i][27]) > 50000){
				   newlist.push(dataList[i]);
				   }
					}
				 
				} 
				if (typeArr[1] == "two"){
					for(var i=0; i< dataList.length; i++){
				   if (parseInt(dataList[i][27]) < 50000){
				   newlist.push(dataList[i]);
				   }
					}
				} 
				if (typeArr[2] == "thousand"){
					for(var i=0; i< dataList.length; i++){
				   if (parseFloat(dataList[i][2]) >10.0){
				   newlist.push(dataList[i]);
				   }
					}
				} 
				new PublicHealthData().tableCreate(dataframe,newlist,columnRow);
				break;
			default :
				break;
			}
			
			df.show();
		}).catch(err => {
			    console.log(err);
			});
		}
		
	getrowvalues(){
	var typeArr = new Array();
	var i=0;
	if(document.getElementById('oneId').checked ==true){
		typeArr[i] = document.getElementById('oneId').value;
		i++;
	}else{
		i++;
    }
	if(document.getElementById('twoId').checked ==true){
		typeArr[i] = document.getElementById('twoId').value;
		i++;
	}else{
		i++;
	}
	
	if(document.getElementById('thousandId').checked ==true){
		typeArr[i] = document.getElementById('thousandId').value;
		
	}else{
		i++;
	}
	if(document.getElementById('streetId').checked ==true){
		typeArr[i] = document.getElementById('streetId').value;
		
	}else{
		i++;
	}
	if(document.getElementById('residenceId').checked ==true){
		typeArr[i] = document.getElementById('residenceId').value;
		
	}
	return typeArr;
	}
	getprowvalues(){
	var typeArr = new Array();
	var i=0;
	if(document.getElementById('poneId').checked ==true){
		typeArr[i] = document.getElementById('poneId').value;
		i++;
	}else{
		i++;
    }
	if(document.getElementById('ptwoId').checked ==true){
		typeArr[i] = document.getElementById('ptwoId').value;
		i++;
	}else{
		i++;
	}
	if(document.getElementById('distId').checked ==true){
		typeArr[i] = document.getElementById('distId').value;
		i++;
	}else{
		i++;
	}
	if(document.getElementById('distId1').checked ==true){
		typeArr[i] = document.getElementById('distId1').value;
		i++;
	}else{
		i++;
	}
	if(document.getElementById('distId2').checked ==true){
		typeArr[i] = document.getElementById('distId2').value;
		i++;
	}else{
		i++;
	}
	
	/*if(document.getElementById('pthousandId').checked ==true){
		typeArr[i] = document.getElementById('pthousandId').value;
		
	}*/
	return typeArr;
	}
	
	getlrowvalues(){
	var typeArr = new Array();
	var i=0;
	if(document.getElementById('loneId').checked ==true){
		typeArr[i] = document.getElementById('oneId').value;
		i++;
	}else{
		i++;
    }
	if(document.getElementById('ltwoId').checked ==true){
		typeArr[i] = document.getElementById('twoId').value;
		i++;
	}else{
		i++;
	}
	
	if(document.getElementById('lthousandId').checked ==true){
		typeArr[i] = document.getElementById('thousandId').value;
		
	}
	return typeArr;
	}
	
	
	getfrowvalues(){
	var typeArr = new Array();
	var i=0;
	if(document.getElementById('foneId').checked ==true){
		typeArr[i] = document.getElementById('oneId').value;
		i++;
	}else{
		i++;
    }
	if(document.getElementById('ftwoId').checked ==true){
		typeArr[i] = document.getElementById('twoId').value;
		i++;
	}else{
		i++;
	}
	
	if(document.getElementById('fthousandId').checked ==true){
		typeArr[i] = document.getElementById('thousandId').value;
		
	}
	return typeArr;
	}
	getpurowvalues(){
	var typeArr = new Array();
	var i=0;
	if(document.getElementById('puoneId').checked ==true){
		typeArr[i] = document.getElementById('oneId').value;
		i++;
	}else{
		i++;
    }
	if(document.getElementById('putwoId').checked ==true){
		typeArr[i] = document.getElementById('twoId').value;
		i++;
	}else{
		i++;
	}
	
	if(document.getElementById('puthousandId').checked ==true){
		typeArr[i] = document.getElementById('thousandId').value;
		
	}
	return typeArr;
	}
}


