// 必须修改好id 并记录下来！
var myChart = echarts.init(document.getElementById('chart3-10'));


//app.title = '多 Y 轴示例';

option = {
	backgroundColor: "#ffffff",
	grid:{
		left:'10%',
		right:'10%',
		top:'10%',
		bottom:'10%'
	},
    tooltip:{
        
    } ,
    legend:{
      data:['杭州','宁波','嘉兴','湖州','绍兴','舟山','温州','金华','衢州','台州','丽水'
                ]
    },
    xAxis: {
        type: 'category',
        data:[2010,2011,2012,2013,2014,2015,2016,2017]
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
    },
    series: [{
            type: 'scatter',
            "name": "杭州",
            "data": [ 5949.17,7019.06,7802.01,8343.52,9206.16,10050.21,11313.72,12603.36]
        }, {
            type: 'scatter',
            "name": "宁波",
            "data": [5163,6059.24,6582.21,7128.87,7610.28,8003.61,8686.49,9842.06]
        }, {
            type: 'scatter',
            "name": "嘉兴",
            "data": [2300.2,2677.09,2890.57,3147.66,3352.6,3517.81,3862.11,4380.52]
        }, {
            type: 'scatter',
            "name": "湖州",
            "data": [1301.73,1520.06,1664.3,1803.15,1956,2084.26,2284.37,2476.13]
        }, {
            type: 'scatter',
            "name": "绍兴",
            "data": [2795.2,3332,3654.03,3967.29,4265.88,4465.97,4789.03,5078.37]
        }, {
            type: 'scatter',
            "name": "舟山",
            "data": [644.32,772.75,853.18,930.85,1015.26,1092.85,1241.2,1219.78]
        }, {
            type: 'scatter',
            "name": "温州",
            "data": [2925.04,3418.53,3669.18,4003.86,4303.05,4618.08,5101.56,5411.59]
        }, {
            type: 'scatter',
            "name": "金华",
            "data": [2110.04,2458.07,2710.77,2958.78,3208.2,3402.34,3684.94,3848.62]
        }, {
            type: 'scatter',
            "name": "衢州",
            "data": [755.48,919.62,972.25,1056.57,1115.1,1146.13,1251.59,1331.27]
        }, {
            type: 'scatter',
            "name": "台州",
            "data": [2426.45,2794.91,2911.26,3153.34,3387.38,3553.85,3898.66,4388.22]
        }, {
            type: 'scatter',
            "name": "丽水",
            "data": [663.29,798.22,894.1,983.08,1051.75,1103.29,1210.24,1250.92]
        }]
};


if (option && typeof option === "object") {
    myChart.setOption(option, true);
}