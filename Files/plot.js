/**
 * 
 */

function crimeDataChart(){
	document.getElementById("fireDataSet").style.display = 'none';
	document.getElementById("policeDataSet").style.display = 'none';
	document.getElementById("crimeDataSet").style.display = 'none';
	document.getElementById("lifesafetyDataSet").style.display = 'none';
	document.getElementById("publichealthDataSet").style.display = 'none';
	document.getElementById("crimeDataId").style.display ='';
	document.getElementById('crimeDataLineId').checked = false;
	document.getElementById('crimeDataBarId').checked = false;
	document.getElementById('crimeDataPieId').checked = false;
	document.getElementById('crimeDataPolarId').checked = false;
	document.getElementById('crimeDataDoughnutId').checked = false;
	document.getElementById('crimeDataMapId').checked = false;
	document.getElementById("crimeDataLineChart").style.display = 'none';
	document.getElementById("crimeDataBarChart").style.display = 'none';
	document.getElementById("crimeDataPieChart").style.display = 'none';
	document.getElementById("crimeDataPolarChart").style.display = 'none';
	document.getElementById("crimeDataDoughnutChart").style.display = 'none';
	document.getElementById("map").style.display = 'none';
}

function policeStationChart(){
	document.getElementById("fireDataSet").style.display = 'none';
	document.getElementById("policeDataSet").style.display = 'none';
	document.getElementById("crimeDataSet").style.display = 'none';
	document.getElementById("lifesafetyDataSet").style.display = 'none';
	document.getElementById("publichealthDataSet").style.display = 'none';
	document.getElementById("policeStationId").style.display ='';
	document.getElementById('policeStationLineId').checked = false;
	document.getElementById('policeStationBarId').checked = false;
	document.getElementById('policeStationPieId').checked = false;
	document.getElementById('policeStationPolarId').checked = false;
	document.getElementById('policeStationDoughnutId').checked = false;
	document.getElementById('policemapId').checked = false;
	document.getElementById("policeStationLineChart").style.display = 'none';
	document.getElementById("policeStationBarChart").style.display = 'none';
	document.getElementById("policeStationPieChart").style.display = 'none';
	document.getElementById("policeStationPolarChart").style.display = 'none';
	document.getElementById("pmap").style.display = 'none';
	document.getElementById("policeStationDoughnutChart").style.display = 'none';
}

function fireStationChart(){
	document.getElementById("fireDataSet").style.display = 'none';
	document.getElementById("policeDataSet").style.display = 'none';
	document.getElementById("crimeDataSet").style.display = 'none';
	document.getElementById("lifesafetyDataSet").style.display = 'none';
	document.getElementById("publichealthDataSet").style.display = 'none';
	document.getElementById("fireStationId").style.display ='';
	document.getElementById('fireStationLineId').checked = false;
	document.getElementById('fireStationBarId').checked = false;
	document.getElementById('fireStationPieId').checked = false;
	document.getElementById('fireStationPolarId').checked = false;
	document.getElementById('fireStationDoughnutId').checked = false;
	document.getElementById("fireStationLineChart").style.display = 'none';
	document.getElementById("fireStationBarChart").style.display = 'none';
	document.getElementById("fireStationPieChart").style.display = 'none';
	document.getElementById("fireStationPolarChart").style.display = 'none';
	document.getElementById("fireStationDoughnutChart").style.display = 'none';
}

function lifeSafetyChart(){
	document.getElementById("fireDataSet").style.display = 'none';
	document.getElementById("policeDataSet").style.display = 'none';
	document.getElementById("crimeDataSet").style.display = 'none';
	document.getElementById("lifesafetyDataSet").style.display = 'none';
	document.getElementById("publichealthDataSet").style.display = 'none';
	document.getElementById("lifeSafetyId").style.display ='';
	document.getElementById('lifeSafetyLineId').checked = false;
	document.getElementById('lifeSafetyBarId').checked = false;
	document.getElementById('lifeSafetyPieId').checked = false;
	document.getElementById('lifeSafetyPolarId').checked = false;
	document.getElementById('lifeSafetyDoughnutId').checked = false;
	document.getElementById("lifeSafetyLineChart").style.display = 'none';
	document.getElementById("lifeSafetyBarChart").style.display = 'none';
	document.getElementById("lifeSafetyPieChart").style.display = 'none';
	document.getElementById("lifeSafetyPolarChart").style.display = 'none';
	document.getElementById("lifeSafetyDoughnutChart").style.display = 'none';
}

function publicHealthServiceChart(){
	document.getElementById("fireDataSet").style.display = 'none';
	document.getElementById("policeDataSet").style.display = 'none';
	document.getElementById("crimeDataSet").style.display = 'none';
	document.getElementById("lifesafetyDataSet").style.display = 'none';
	document.getElementById("publichealthDataSet").style.display = 'none';
	document.getElementById("publicHealthServiceId").style.display ='';
	document.getElementById('publicHealthServiceLineId').checked = false;
	document.getElementById('publicHealthServiceBarId').checked = false;
	document.getElementById('publicHealthServicePieId').checked = false;
	document.getElementById('publicHealthServicePolarId').checked = false;
	document.getElementById('publicHealthServiceDoughnutId').checked = false;
	document.getElementById("publicHealthServiceLineChart").style.display = 'none';
	document.getElementById("publicHealthServiceBarChart").style.display = 'none';
	document.getElementById("publicHealthServicePieChart").style.display = 'none';
	document.getElementById("publicHealthServicePolarChart").style.display = 'none';
	document.getElementById("publicHealthServiceDoughnutChart").style.display = 'none';
}

function crimeDataPlotChart(){
	var typeArr = new Array();
	var i=0;
	if(document.getElementById('crimeDataLineId').checked ==true){
		typeArr[i] = document.getElementById('crimeDataLineId').value;
			document.getElementById('crimeDataLineChart').style.display ='';
		i++;
	}else {
		document.getElementById('crimeDataLineChart').style.display ='none';
	}
	
	if(document.getElementById('crimeDataBarId').checked ==true){
		typeArr[i] = document.getElementById('crimeDataBarId').value;
		document.getElementById('crimeDataBarChart').style.display ='';
		i++;
	}else {
		document.getElementById('crimeDataBarChart').style.display ='none';
	}
	
	if(document.getElementById('crimeDataPieId').checked ==true){
		typeArr[i] = document.getElementById('crimeDataPieId').value;
		document.getElementById('crimeDataPieChart').style.display='';
		i++;
	}else{
		document.getElementById('crimeDataPieChart').style.display='none';
	}
	
	if(document.getElementById('crimeDataPolarId').checked ==true){
		typeArr[i] = document.getElementById('crimeDataPolarId').value;
		document.getElementById('crimeDataPolarChart').style.display='';
		i++;
	}else{
		document.getElementById('crimeDataPolarChart').style.display='none';
	}
	if(document.getElementById('crimeDataDoughnutId').checked ==true){
		typeArr[i] = document.getElementById('crimeDataDoughnutId').value;
		document.getElementById('crimeDataDoughnutChart').style.display ='';
		i++;
	}else {
		document.getElementById('crimeDataDoughnutChart').style.display ='none';
	}
	if(document.getElementById('crimeDataMapId').checked ==true){
		document.getElementById('map').style.display ='';
		initMap();
	}else {
		document.getElementById('map').style.display ='none';
	}
	if(typeArr.length==0){
		//alert('Please select atleast one chart');
		return;
	}else {
		new ChartFactory(dataType,typeArr);
	}
}

function policeStationPlotChart(){
	var typeArr = new Array();
	var i=0;
	if(document.getElementById('policeStationLineId').checked ==true){
		typeArr[i] = document.getElementById('policeStationLineId').value;
			document.getElementById('policeStationLineChart').style.display ='';
		i++;
	}else {
		document.getElementById('policeStationLineChart').style.display ='none';
	}
	
	if(document.getElementById('policeStationBarId').checked ==true){
		typeArr[i] = document.getElementById('policeStationBarId').value;
		document.getElementById('policeStationBarChart').style.display ='';
		i++;
	}else {
		document.getElementById('policeStationBarChart').style.display ='none';
	}
	
	if(document.getElementById('policeStationPieId').checked ==true){
		typeArr[i] = document.getElementById('policeStationPieId').value;
		document.getElementById('policeStationPieChart').style.display='';
		i++;
	}else{
		document.getElementById('policeStationPieChart').style.display='none';
	}
	
	if(document.getElementById('policeStationPolarId').checked ==true){
		typeArr[i] = document.getElementById('policeStationPolarId').value;
		document.getElementById('policeStationPolarChart').style.display='';
		i++;
	}else{
		document.getElementById('policeStationPolarChart').style.display='none';
	}
	if(document.getElementById('policeStationDoughnutId').checked ==true){
		typeArr[i] = document.getElementById('policeStationDoughnutId').value;
		document.getElementById('policeStationDoughnutChart').style.display ='';
		i++;
	}else {
		document.getElementById('policeStationDoughnutChart').style.display ='none';
	}
	if(document.getElementById('Policemapid').checked ==true){
		document.getElementById('pmap').style.display ='';
		pinitMap();
	}else {
		document.getElementById('pmap').style.display ='none';
	}
	if(typeArr.length==0){
		//alert('Please select atleast one chart');
		return;
	}else {
		new ChartFactory(dataType,typeArr);
	}
}

function fireStationPlotChart(){
	var typeArr = new Array();
	var i=0;
	if(document.getElementById('fireStationLineId').checked ==true){
		typeArr[i] = document.getElementById('fireStationLineId').value;
			document.getElementById('fireStationLineChart').style.display ='';
		i++;
	}else {
		document.getElementById('fireStationLineChart').style.display ='none';
	}
	
	if(document.getElementById('fireStationBarId').checked ==true){
		typeArr[i] = document.getElementById('fireStationBarId').value;
		document.getElementById('fireStationBarChart').style.display ='';
		i++;
	}else {
		document.getElementById('fireStationBarChart').style.display ='none';
	}
	
	if(document.getElementById('fireStationPieId').checked ==true){
		typeArr[i] = document.getElementById('fireStationPieId').value;
		document.getElementById('fireStationPieChart').style.display='';
		i++;
	}else{
		document.getElementById('fireStationPieChart').style.display='none';
	}
	
	if(document.getElementById('fireStationPolarId').checked ==true){
		typeArr[i] = document.getElementById('fireStationPolarId').value;
		document.getElementById('fireStationPolarChart').style.display='';
		i++;
	}else{
		document.getElementById('fireStationPolarChart').style.display='none';
	}
	if(document.getElementById('fireStationDoughnutId').checked ==true){
		typeArr[i] = document.getElementById('fireStationDoughnutId').value;
		document.getElementById('fireStationDoughnutChart').style.display ='';
		i++;
	}else {
		document.getElementById('fireStationDoughnutChart').style.display ='none';
	}
	
	if(typeArr.length==0){
		//alert('Please select atleast one chart');
		return;
	}else {
		new ChartFactory(dataType,typeArr);
	}
}

function lifeSafetyPlotChart(){
	var typeArr = new Array();
	var i=0;
	if(document.getElementById('lifeSafetyLineId').checked ==true){
		typeArr[i] = document.getElementById('lifeSafetyLineId').value;
			document.getElementById('lifeSafetyLineChart').style.display ='';
		i++;
	}else {
		document.getElementById('lifeSafetyLineChart').style.display ='none';
	}
	
	if(document.getElementById('lifeSafetyBarId').checked ==true){
		typeArr[i] = document.getElementById('lifeSafetyBarId').value;
		document.getElementById('lifeSafetyBarChart').style.display ='';
		i++;
	}else {
		document.getElementById('lifeSafetyBarChart').style.display ='none';
	}
	
	if(document.getElementById('lifeSafetyPieId').checked ==true){
		typeArr[i] = document.getElementById('lifeSafetyPieId').value;
		document.getElementById('lifeSafetyPieChart').style.display='';
		i++;
	}else{
		document.getElementById('lifeSafetyPieChart').style.display='none';
	}
	
	if(document.getElementById('lifeSafetyPolarId').checked ==true){
		typeArr[i] = document.getElementById('lifeSafetyPolarId').value;
		document.getElementById('lifeSafetyPolarChart').style.display='';
		i++;
	}else{
		document.getElementById('lifeSafetyPolarChart').style.display='none';
	}
	if(document.getElementById('lifeSafetyDoughnutId').checked ==true){
		typeArr[i] = document.getElementById('lifeSafetyDoughnutId').value;
		document.getElementById('lifeSafetyDoughnutChart').style.display ='';
		i++;
	}else {
		document.getElementById('lifeSafetyDoughnutChart').style.display ='none';
	}
	
	if(typeArr.length==0){
		//alert('Please select atleast one chart');
		return;
	}else {
		new ChartFactory(dataType,typeArr);
	}
}

function publicHealthServicePlotChart(){
	var typeArr = new Array();
	var i=0;
	if(document.getElementById('publicHealthServiceLineId').checked ==true){
		typeArr[i] = document.getElementById('publicHealthServiceLineId').value;
			document.getElementById('publicHealthServiceLineChart').style.display ='';
		i++;
	}else {
		document.getElementById('publicHealthServiceLineChart').style.display ='none';
	}
	
	if(document.getElementById('publicHealthServiceBarId').checked ==true){
		typeArr[i] = document.getElementById('publicHealthServiceBarId').value;
		document.getElementById('publicHealthServiceBarChart').style.display ='';
		i++;
	}else {
		document.getElementById('publicHealthServiceBarChart').style.display ='none';
	}
	
	if(document.getElementById('publicHealthServicePieId').checked ==true){
		typeArr[i] = document.getElementById('publicHealthServicePieId').value;
		document.getElementById('publicHealthServicePieChart').style.display='';
		i++;
	}else{
		document.getElementById('publicHealthServicePieChart').style.display='none';
	}
	
	if(document.getElementById('publicHealthServicePolarId').checked ==true){
		typeArr[i] = document.getElementById('publicHealthServicePolarId').value;
		document.getElementById('publicHealthServicePolarChart').style.display='';
		i++;
	}else{
		document.getElementById('publicHealthServicePolarChart').style.display='none';
	}
	if(document.getElementById('publicHealthServiceDoughnutId').checked ==true){
		typeArr[i] = document.getElementById('publicHealthServiceDoughnutId').value;
		document.getElementById('publicHealthServiceDoughnutChart').style.display ='';
		i++;
	}else {
		document.getElementById('publicHealthServiceDoughnutChart').style.display ='none';
	}
	
	if(typeArr.length==0){
		//alert('Please select atleast one chart');
		return;
	}else {
		new ChartFactory(dataType,typeArr);
	}
}
var map, heatmap;
function initMap() {
        var geocoder =  new google.maps.Geocoder();
        var DataFrame = dfjs.DataFrame;
		var dataList;
			DataFrame.fromCSV('CrimePriorData.csv').then(
		df => {
			
			var dataframe = new DataFrame(df);
			dataList = df.toArray();
			//geocoder.geocode( { 'address': 'chicago, us'});
		
        map = new google.maps.Map(document.getElementById('map'), {
          zoom:10,
          mapTypeId:google.maps.MapTypeId.HYBRID,
          center: {lat:   41.8781, lng:-87.6298},
          });
        map.setMapTypeId(google.maps.MapTypeId.HYBRID); 
        map.setTilt(90);
        dataMVC = new google.maps.MVCArray([]);

        for(var i=0; i< dataList.length; i++){
			dataMVC.push(new google.maps.LatLng(dataList[i][14],dataList[i][15]));
        }
		
		
		var datalist;
		var marker;
		DataFrame.fromCSV('CrimePriorData.csv').then(
		df => {		
		    var dataframe = new DataFrame(df);
			datalist = df.toArray();
		     for (i = 0; i < datalist.length; i++) {  
             marker = new google.maps.Marker({
                     position: new google.maps.LatLng(datalist[i][14], datalist[i][15]),
                      map: map
                      });
			 }
        }) //end code 
		
        //dataMVC.push(new google.maps.LatLng(41.77279778, -87.683468276));
        heatmap = new google.maps.visualization.HeatmapLayer({
          data: dataMVC,
          radius: 50,
          map: map
        });	
		
		df.show();
		}).catch(err => {
			    console.log(err);
			});
		
		
        

}

 function pinitMap() {
       var geocoder =  new google.maps.Geocoder();
        var DataFrame = dfjs.DataFrame;
		var dataList;
			DataFrame.fromCSV('CrimePriorData.csv').then(
		df => {
			
			var dataframe = new DataFrame(df);
			dataList = df.toArray();
			//geocoder.geocode( { 'address': 'chicago, us'});
		
        map = new google.maps.Map(document.getElementById('pmap'), {
          zoom:10,
          mapTypeId:google.maps.MapTypeId.HYBRID,
          center: {lat:   41.8781, lng:-87.6298},
          });
        map.setMapTypeId(google.maps.MapTypeId.HYBRID); 
        map.setTilt(90);
        dataMVC = new google.maps.MVCArray([]);

        for(var i=0; i< dataList.length; i++){
			dataMVC.push(new google.maps.LatLng(dataList[i][14],dataList[i][15]));
        }   
		// new code 
		var pdatalist;
		var marker;
		DataFrame.fromCSV('Police_Stations.csv').then(
		df => {		
		    var dataframe = new DataFrame(df);
			pdatalist = df.toArray();
		     for (i = 0; i < pdatalist.length; i++) {  
             marker = new google.maps.Marker({
                     position: new google.maps.LatLng(pdatalist[i][12], pdatalist[i][13]),
                      map: map
                      });
			 }
        }) //end code 
		 
        heatmap = new google.maps.visualization.HeatmapLayer({
          data: dataMVC,
          radius: 50,
          map: map
        });
		
		df.show();
		}).catch(err => {
			    console.log(err);
			});
		

		
		
        

}

 