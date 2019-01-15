// 必须修改好id 并记录下来！
var myChart = echarts.init(document.getElementById('chart3-5'));

//var app = {};
//option = null;
var data = echarts.dataTool.prepareBoxplotData([
     [14133.06 ,13282.07 ,13447.67 ,15022.38 ,13900.52 ,14424.03 ,15753.97 ,20354.06],
                [11223.55 ,11032.33 ,11240.17 ,11099.86 ,10745.28 ,10708.37 ,11228.51 ,13324.53],
                [13448.95 ,16877.70 ,17367.95 ,16469.16 ,14038.71 ,12583.77 ,13075.64 ,12307.67],
                [6355.15 ,6919.74 ,7161.53 ,7316.26 ,7117.62 ,7184.35 ,7626.49 ,10758.36],
                [6278.07 ,6761.25 ,6799.85 ,6992.16 ,6558.57 ,6882.42 ,6945.58 ,8353.21],
                [7593.14 ,8443.53 ,8660.58 ,9357.42 ,8280.23 ,8095.37 ,7949.70 ,8997.19],
                [6489.26 ,8128.13 ,9796.39 ,9528.95 ,10517.96 ,10535.09 ,9547.14 ,11257.38],
                [5299.43 ,6935.37 ,6747.64 ,6807.40 ,6543.72 ,6441.49 ,7569.95 ,9602.25],
                [9063.69 ,10366.28 ,10666.48 ,11938.43 ,11143.77 ,9275.70 ,9705.47 ,12237.79],
                [7139.22 ,8722.72 ,9549.98 ,9662.61 ,8909.11 ,8981.60 ,9149.27 ,9068.50],
                [5895.29 ,7440.84 ,8629.54 ,9041.56 ,9423.82 ,8943.09 ,8633.10 ,9189.06]
]);

option = {
	backgroundColor: '#ffffff',
    title: [
        {
            text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
            borderColor: '#999',
            borderWidth: 1,
            textStyle: {
                fontSize: 12
            },
            left: '10%',
            top: '90%'
        }
    ],
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '20%'
    },
    xAxis: {
        type: 'category',
       data: ['杭州市','宁波市','温州市','嘉兴市','湖州市','绍兴市','金华市','衢州市','舟山市','台州市','丽水市'],
        boundaryGap: true,
        nameGap: 30,
        splitArea: {
            show: false
        },
        axisLabel: {
            formatter: '{value}'
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        name: '元/平方米',
        splitArea: {
            show: true
        }
    },
    series: [
        {
            name: 'boxplot',
            type: 'boxplot',
            data: data.boxData,
            tooltip: {
                formatter: function (param) {
                    return [
                         param.name + ': ',
                        'upper: ' + param.data[5].toFixed(2),
                        'Q3: ' + param.data[4].toFixed(2),
                        'median: ' + param.data[3].toFixed(2),
                        'Q1: ' + param.data[2].toFixed(2),
                        'lower: ' + param.data[1].toFixed(2)
                    ].join('<br/>');
                }
            }
        },
        {
            name: 'outlier',
            type: 'scatter',
            data: data.outliers
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}