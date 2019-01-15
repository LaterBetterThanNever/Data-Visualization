// 必须修改好id 并记录下来！
var myChart = echarts.init(document.getElementById('chart2-2'));
// 指定图表的配置项和数据

//app.title = '气泡图';

//------------------------------------引用请注明出处

var myData = ['杭州市','宁波市','嘉兴市','湖州市','绍兴市','舟山市','温州市','金华市','衢州市','台州市','丽水市'];
var databeast = {
    2017: [1567.42,1245.29,443.79,237.43,431.36,125.76,465.35,357.71,111.28,382.25,112.91],
    2016: [1402.38,1114.54,387.93,211.18,390.30,120.32,439.87,338.14,102.56,343.28,103.57],
    2015: [1233.88,1006.41,350.35,191.31,362.89,112.72,403.07,309.69,94.02,298.02,94.51],
    2014: [1027.32,860.61,307.07,167.84,317.27,101.02,352.53,268.87,80.32,265.21,80.96],
    2013: [945.20,792.81,282.31,154.66,293.07,92.63,323.98,242.47,72.75,247.73,73.70],
    2012: [859.99,725.50,257.73,138.55,265.76,85.56,289.64,214.89,63.42,220.42,64.61],
    2011: [785.15,657.55,226.40,122.12,239.69,76.48,270.87,185.77,57.57,200.12,57.36],
    2010: [671.34,530.93,176.83,97.27,193.23,61.04,228.49,155.93,46.98,164.88,44.94],
};
var databeauty = {
    2017: [1540.92,1410.60,494.70,325.02,469.83,258.60,761.61,536.69,300.47,563.10,378.64],
    2016: [1404.00,1289.00,442.00,289.00,456.00,251.00,667.00,542.00,268.00,514.00,342.00],
    2015: [1205.48,1252.64,424.13,273.74,421.41,239.65,569.43,464.38,230.67,457.21,279.33],
    2014: [961.18,1000.86,334.90,224.57,346.44,188.19,488.98,352.86,191.94,371.47,217.27],
    2013: [855.74,939.89,303.36,197.61,312.11,189.83,437.96,322.25,165.51,329.03,195.38],
    2012: [786.28,828.44,260.70,167.51,278.71,155.22,387.79,271.95,138.89,287.93,167.94],
    2011: [747.51,750.72,240.61,151.73,253.31,148.10,370.45,235.08,125.44,265.53,154.28],
    2010: [616.58,600.74,199.06,127.12,221.95,105.03,310.78,211.52,107.09,222.76,135.20],
};
var timeLineData = [2010,2011,2012,2013,2014,2015,2016,2017];

option = {
    baseOption: {
        backgroundColor: '#FFF',
        timeline: {
            show: true,
            axisType: 'category',
            tooltip: {
                show: true,
                formatter: function(params) {
                    console.log(params);
                    return params.name + '年份数据统计';
                }
            },
            autoPlay: true,
            currentIndex: 6,
            playInterval: 1000,
            label: {
                normal: {
                    show: true,
                    interval: 'auto',
                    formatter: '{value}年',
                },
            },
            data: [],
        },
        title: {
//               text:'浙江省景点帅哥美女统计', 
            textStyle: {
                color: '#000',
                fontSize: 16,
            },
//          subtext: '作者:花自飘凌水自流',
        },
        legend: {
            data: ['一般公共预算收入', '一般公共预算支出'],
            top: 4,
            right: '20%',
            textStyle: {
                color: '000',
            },
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b}<br/>{a}: {c}亿元',
            axisPointer: {
                type: 'shadow',
            }
        },
        
        toolbox:{
            right:20,
            feature:{
                saveAsImage: {},
                restore: {},
                dataView: {},
                dataZoom: {},
                magicType: {
                    type:['line','bar']
                },
                // brush: {},
            }
        },
        
        grid: [{
            show: false,
            left: '3%',
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '44%',
        }, {
            show: false,
            left: '50.5%',
            top: 80,
            bottom: 60,
            width: '0%',
        }, {
            show: false,
            right: '3%',
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '44%',
        }, ],

        xAxis: [
            {
            type: 'value',
            inverse: true,
            max:1800,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#B2B2B2',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1F2022',
                    width: 1,
                    type: 'solid',
                },
            },
        }, {
            gridIndex: 1,
            show: false,
        }, {
            gridIndex: 2,
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#B2B2B2',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1F2022',
                    width: 1,
                    type: 'solid',
                },
            },
        }, ],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                margin: 8,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: myData,
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: myData.map(function(value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center',
                    }
                }
            }),
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: myData,
        }, ],
        series: [],

    },

    options: [],


};

for (var i = 0; i < timeLineData.length; i++) {
    option.baseOption.timeline.data.push(timeLineData[i]);
    option.options.push({
        series: [{
                name: '一般公共预算收入',
                type: 'bar',
                barGap: 20,
                barWidth: 20,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: true,
                        position: 'left',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#659F83',
                    },
                    emphasis: {
                        color: '#08C7AE',
                    },
                },
                data: databeast[timeLineData[i]],
            },


            {
                name: '一般公共预算支出',
                type: 'bar',
                barGap: 20,
                barWidth: 20,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: true,
                        position: 'right',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#F68989',
                    },
                    emphasis: {
                        color: '#F94646',
                    },
                },
                data: databeauty[timeLineData[i]],
            }
        ]
    });
}

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);