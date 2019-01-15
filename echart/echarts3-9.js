// 必须修改好id 并记录下来！
var myChart = echarts.init(document.getElementById('chart3-9'));

var app = {};
option = null;
app.title = '堆叠条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['宁波市区', '余姚市','慈溪市','象山县','宁海县']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: [2010,2011,2012,2013,2014,2015,2016,2017]
    },
    series: [
        {
            name: '宁波市区',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [3062.16,3621.89,3950.98,4309.46,4589.30,4877.18,5574.66,6282.69]
        },
        {
            name: '余姚市',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [567.88,658.77,709.07,749.63,804.36,826.21,904.75,1007.86]
        },
        {
            name: '慈溪市',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [757.42,877.18,958.21,1031.09,1109.41,1137.07,1276.17,1532.57]
        },
        {
            name: '象山县',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [271.73,318.21,337.16,363.85,388.08,410.20,444.22,478.22]
        },
        {
            name: '宁海县',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [278.74,323.32,352.53,384.48,410.14,433.15,486.69,540.73]
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}