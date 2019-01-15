var dom = document.getElementById("chart4-2");
var myChart = echarts.init(dom);

//app.title = '多 Y 轴示例';

var colors = ['#5793f3', '#d14a61', '#675bba','#E61A42'];

option = {
    color: colors,
	backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'axis'
    },
    grid: {
			top:'20%',
       		bottom: '10%',
			right:'10%',
        	containLabel: true
	},
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['全省能源消费量','全省电力消费量','能源消费增长率','电力消费增长率']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '全省能源消费量',
            min: 0,
            max: 25000,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '全省电力消费量',
            min: 0,
            max: 5000,
            position: 'right',
            offset: 85,
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '能源消费增长率',
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        },
        {
            type: 'value',
            name: '电力消费增长率',
            position: 'left',
            offset: 95,
            axisLine: {
                lineStyle: {
                    color: colors[3]
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'全省能源消费量',
            type:'bar',
            data:[16865.29,17827.27,18076.18,18640.00,18826.00,19610.00,20275.60,21030.01]
        },
        {
            name:'全省电力消费量',
            type:'bar',
            yAxisIndex: 1,
            data:[2820.93,3116.91,3210.55,3453.05,3506.39,3554.00,3873.19,4192.63]
        },
        {
            name:'能源消费增长率',
            type:'line',
            yAxisIndex: 2,
            data:[8.34,5.70,1.40,4.11,1.00,4.20,3.39,3.72]
        },        {
            name:'电力消费增长率',
            type:'line',
            yAxisIndex: 3,
            data:[14.14,10.49,3.00,7.55,1.54,1.40,8.98,8.25]
        },
    ]
};


if (option && typeof option === "object") {
    myChart.setOption(option, true);
}