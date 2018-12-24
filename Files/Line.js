/**
 * 
 */

class Line extends ChartConfig{
	
	createCanvas(fileName,labelId,dataId,chartType){
		var DataFrame = dfjs.DataFrame;
		DataFrame.fromCSV(fileName).then(
		df => {
			var columnRow = df.listColumns();
			var dataframe = new DataFrame(df);
			var dataList = df.toArray();
			var labelArr = new Array();
			var dataArr = new Array();
			for(var i=0;i<dataList.length;i++){
				labelArr[i] = dataList[i][labelId];
			}
			for(var j=0;j<dataList.length;j++){
				dataArr[j] = dataList[j][dataId];
			}
			
	var ctx = document.getElementById(chartType);
	var myChart = new Chart(ctx, {
	type: 'line',
	data: {
	labels: labelArr,
	datasets: [{
	label: "Line Chart",
	fill: false,
    display: true,
    lineTension: 0.1,
    backgroundColor: "rgba(105,102,172,1)",
    borderColor: "rgba(105,102,172,1)",
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: "rgba(105,102,172,1)",
    pointBackgroundColor: "#fff",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(105,102,172,1)",
    pointHoverBorderColor: "rgba(220,220,220,1)",
    pointRadius: 1,
    pointHitRadius: 10,
    data: dataArr,
    spanGaps: false,
	}]
	},
	});
		}).catch(err => {
    console.log(err);
		});
	}
	
}