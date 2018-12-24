/**
 * 
 */
class Polar extends ChartConfig{
	
	
	createCanvas(fileName,labelId,dataId,chartType){
		var DataFrame = dfjs.DataFrame;
		DataFrame.fromCSV(fileName).then(
		df => {
			var columnRow = df.listColumns();
			var dataframe = new DataFrame(df);
			var dataList = df.toArray();
			var labelArr = new Array();
			var dataArr = new Array();
			var red,green,blue,alpha;
			var red1,green1,blue1,alpha1;
			var backGroundColorArray = [];
			var borderColorArray =[];
			var arcbordercolor="#000000";
			for(var i=0;i<dataList.length;i++){
				labelArr[i] = dataList[i][labelId];
				dataArr[i] = dataList[i][dataId];
				red = Math.floor((Math.random()*150)+0);
				green = Math.floor((Math.random()*150)+0);
				blue = Math.floor((Math.random()*150)+0);
				alpha = 0.8;
				backGroundColorArray[i] = 'rgba('+red+','+blue+','+green+','+alpha+')';
				borderColorArray[i] = 'rgba('+red+','+blue+','+green+','+alpha+')';
			}
			var ctx = document.getElementById(chartType);
			var myChart = new Chart(ctx, {					
				type: 'polarArea',
				data: {
					labels: labelArr,
					datasets: [{
						label: 'Staff Strength',
						data: dataArr,
						backgroundColor:backGroundColorArray,
						borderColor:borderColorArray,
						borderWidth: 1
					}]
				},
				options: {
					elements: {
						arc: {
							borderColor : arcbordercolor
						}
					}
				}
			})
			}).catch(err => {
				console.log(err);
			});
		}
}