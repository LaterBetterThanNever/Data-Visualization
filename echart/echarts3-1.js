var dom = document.getElementById("chart3-1");
var myChart = echarts.init(dom);
option = {
    backgroundColor: "#ffffff",
    color: ['#ffd285', '#ff733f', '#ec4863'],

    title: [{
        text: '近年固定资产投资情况表',
        left: '5%',
        top: '3%',
        textStyle: {
            color: '#000'
        }
    }, {
        text: '固定资产投资占比',
        left: '83%',
        top: '6%',
        textAlign: 'center',
        textStyle: {
            color: '#000'
        }
    }],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 300,
        top: '7%',
        textStyle: {
            color: '#ffd285',
        },
        data: ['固定资产投资',"投资项目投资","房地产开发投资"]
    },
    grid: {
        left: '10%',
        right: '35%',
        top: '16%',
        bottom: '6%',
        containLabel: true
    },
    toolbox: {
        "show": false,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        "axisLine": {
            lineStyle: {
                color: '#FF4500'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#000'
            }
        },
        boundaryGap: false,
        data: ['2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年']
    },
    yAxis: {
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#000'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#000'
            }
        },
        type: 'value'
    },
    series: [{
        name: '固定资产投资',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
        data: [11451.98,14077.25,17095.96,20194.07,23554.76,26664.72,29571.00,31125.99]
    }, {
        name: '投资项目投资',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
        data: [8426.55,9602.90,11869.69,13977.82,16292.38,19552.79,22101.63,22899.21]
    }, {
        name: '房地产开发投资',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
        data: [3025.43,4474.35,5226.27,6216.25,7262.38,7111.93,7469.37,8226.78]
    }, 
    {
        type: 'pie',
        center: ['83%', '33%'],
        radius: ['25%', '30%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 22899.21,
            name: '固定资产投资分析',
            itemStyle: {
                normal: {
                    color: '#ffd285'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#ffd285',
                        fontSize: 20

                    }
                }
            }
        }, {
            value: 8226.78,
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#87CEFA'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#ffd285',
                    },
                    formatter: '\n投资项目投资'
                }
            }
        }]
    },


    {
        type: 'pie',
        center: ['83%', '72%'],
        radius: ['25%', '30%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 58.7,
            name: '固定资产投资分析',
            itemStyle: {
                normal: {
                    color: '#ff733f'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#ff733f',
                        fontSize: 20

                    }
                }
            }
        }, {
            value: 41.3,
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#87CEFA'


                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#FF4500',
                    },
                    formatter: '\n交付使用率'
                }
            }
        }]
    }]
}
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}