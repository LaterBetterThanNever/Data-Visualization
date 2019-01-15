// 必须修改好id 并记录下来！
var myChart = echarts.init(document.getElementById('chart2-3'));
// 指定图表的配置项和数据

//app.title = '气泡图';

//------------------------------------引用请注明出处


        // 指定图表的配置项和数据
		var dataMap = {};
	function dataFormatter(obj) {
    var pList = ['杭州','宁波','温州','绍兴','金华','湖州','衢州','嘉兴','丽水','台州','舟山','宁波市区','余姚市','慈溪市','象山县','宁海县'];
    var temp;
    for (var year = 2010; year <= 2017; year++) {
        var max = 0;
        var sum = 0;
        temp = obj[year];
        for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[year][i] = {
                name : pList[i],
                value : temp[i]
            }
        }
        obj[year + 'max'] = Math.floor(max / 100) * 100;
        obj[year + 'sum'] = sum;
    }
    return obj;
}

dataMap.dataGDP = dataFormatter({
    2017:[2921.3,2415.61,778.26,705.53,601.18,408.89,174.48,769.31,180.46,656.97,187.22,1815.76,152.45,290.13,67.19,90.08],
    2016:[2558.41,2145.72,723.96,630.08,555.19,360.89,155.03,673.37,164.87,583.83,173.29,1619.04,139.11,244.93,62.61,80.04],
    2015:[2238.75,2072.63,677.92,602.19,516.96,327.82,143.99,638.8,151.66,539.78,159.59,1521.20,133.79,220.70,61.40,73.14],
    2014:[1920.11,1790.89,612.44,546.34,461.4,295.71,126.82,568.09,135.02,485.29,148.93,1298.94,119.43,196.92,54.77,65.56],
    2013:[1734.98,1651.18,565.63,502.15,415.96,271.66,118.21,517.49,124.22,448.47,137.42,1218.11,106.34,164.53,50.62,60.41],
    2012:[1627.89,1536.51,517.89,469.31,376.47,246.88,106.39,471.92,112.66,408.95,133.45,1131.18,112.85,146.04,46.68,55.16],
    2011:[1488.92,1431.76,485.62,426.45,328.35,219.08,95.02,416,100.09,370.47,127.18,1069.10,100.76,129.30,42.32,50.12],
    2010:[1245.43,1171.75,411.43,349.25,272.68,172.35,75.35,334.33,76.84,310.62,98.53,875.85,82.07,104.88,35.16,40.60]
});

option = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2010','2011','2012','2013',
                '2014', '2015','2016','2017'
            ],
            label: {
                formatter : function(s) {
                    return (new Date(s)).getFullYear();
                }
            }
        },
        title: {
//          subtext: '数据来自国家统计局'
        },
        tooltip: {
        },
        legend: {
            x: 'right',
            data: ['第一产业'],
            selected: {
            }
        },
        calculable : true,
        grid: {
            top: 80,
            bottom: 100,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: true,
                        formatter: function (params) {
                            return params.value.replace('\n', '');
                        }
                    }
                }
            }
        },
        xAxis: [
            {
                'type':'category',
                'axisLabel':{'interval':0},
                'data':[
                    '杭州','宁波','温州','绍兴','金华','湖州','衢州','嘉兴','丽水','台州','舟山','宁波市区','余姚市','慈溪市','象山县','宁海县'
                ],
                splitLine: {show: false}
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '（亿元）',
                max: 3000
            }
        ],
        series: [
            {name: '财政收入', type: 'bar'},
        ]
    },
    options: [
        {
            title: {text: '2010浙江省各市财务总收入指标'},
            series: [
                {data: dataMap.dataGDP['2010']},
            ]
        },
        {
            title : {text: '2011浙江省各市财务总收入指标'},
            series : [
                {data: dataMap.dataGDP['2011']},
            ]
        },
        {
            title : {text: '2012浙江省各市财务总收入指标'},
            series : [
                {data: dataMap.dataGDP['2012']}
            ]
        },
        {
            title : {text: '2013浙江省各市财务总收入指标'},
            series : [
                {data: dataMap.dataGDP['2013']}
            ]
        },
        {
            title : {text: '2014浙江省各市财务总收入指标'},
            series : [
                {data: dataMap.dataGDP['2014']}
            ]
        },
        {
            title : {text: '2015浙江省各市财务总收入指标'},
            series : [
                {data: dataMap.dataGDP['2015']}
            ]
        },
        {
            title : {text: '2016浙江省各市财务总收入指标'},
            series : [
                {data: dataMap.dataGDP['2016']}
            ]
        },
        {
            title : {text: '2017浙江省各市财务总收入指标'},
            series : [
                {data: dataMap.dataGDP['2017']}
            ]
        }
    ]
};
		
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);