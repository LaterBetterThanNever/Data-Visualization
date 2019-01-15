var dom = document.getElementById("chart3-4");
var myChart = echarts.init(dom);


option = {
		backgroundColor: '#ffffff',
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: true
        },
        dataset: {
            source: [
                ['city', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
                ['杭州市',14133.06 ,13282.07 ,13447.67 ,15022.38 ,13900.52 ,14424.03 ,15753.97 ,20354.06],
                ['宁波市',11223.55 ,11032.33 ,11240.17 ,11099.86 ,10745.28 ,10708.37 ,11228.51 ,13324.53],
                ['温州市',13448.95 ,16877.70 ,17367.95 ,16469.16 ,14038.71 ,12583.77 ,13075.64 ,12307.67],
                ['嘉兴市',6355.15 ,6919.74 ,7161.53 ,7316.26 ,7117.62 ,7184.35 ,7626.49 ,10758.36],
                ['湖州市',6278.07 ,6761.25 ,6799.85 ,6992.16 ,6558.57 ,6882.42 ,6945.58 ,8353.21],
                ['绍兴市',7593.14 ,8443.53 ,8660.58 ,9357.42 ,8280.23 ,8095.37 ,7949.70 ,8997.19],
                ['金华市',6489.26 ,8128.13 ,9796.39 ,9528.95 ,10517.96 ,10535.09 ,9547.14 ,11257.38],
                ['衢州市',5299.43 ,6935.37 ,6747.64 ,6807.40 ,6543.72 ,6441.49 ,7569.95 ,9602.25],
                ['舟山市',9063.69 ,10366.28 ,10666.48 ,11938.43 ,11143.77 ,9275.70 ,9705.47 ,12237.79],
                ['台州市',7139.22 ,8722.72 ,9549.98 ,9662.61 ,8909.11 ,8981.60 ,9149.27 ,9068.50],
                ['丽水市',5895.29 ,7440.84 ,8629.54 ,9041.56 ,9423.82 ,8943.09 ,8633.10 ,9189.06]
                
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '50%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row',showAllSymbol: true},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '28%'],
                label: {
                    formatter: '{b}: ({d}%)'
                },
                encode: {
                    itemName: 'city',
                    value: '2012',
                    tooltip: '2012'
                }
            }
        ]
    };

myChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });

myChart.setOption(option);


if (option && typeof option === "object") {
    myChart.setOption(option, true);
}