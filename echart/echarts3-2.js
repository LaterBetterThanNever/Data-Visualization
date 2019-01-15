// 必须修改好id 并记录下来！
var myChart = echarts.init(document.getElementById('chart3-2'));

option = {
    backgroundColor: '#ffffff',
    title: {
        text: '固定资产投资划分',
        textStyle:{
            color:'#fff', 
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title: [{
        },
        {
            text: '按投资项目划分',
            top: '10%',
            left: '10%',
            textStyle: {
                color: '#000',
            },
        },
        {
            text: '按投资主体划分',
            top: '10%',
            left: '35%',
            textStyle: {
                color: '#000',
            },
        },
        {
            text: '按产业划分',
            top: '10%',
            left: '75%',
            textStyle: {
                color: '#000',
            },
        }
    ],
    legend: [],
    grid: {
        left: '55%',
        top:'20%',
        right: '-5%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#000'
            }
        },
    },
    yAxis: {
        type: 'category',
        data: ['农业投资','工业投资','工业技改投资','制造业投资','高技术产业投资','装备制造业投资','战略性新兴产业投资','服务业投资','信息传输、软件和信息技术服务业'],
        axisLine: {
            lineStyle: {
                color: "#000"
            }
        },
    },
    series: [{
            name: '投资金额（亿元）',
            type: 'bar',            
            left:'50%',
            center: ['30%', '50%'],
            data: [353.90,9301.94,7021.19,7988.80,904.11,3926.90,2850.15,21553.17,336.91]
        },
        {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} 亿元({d}%)"
            },
            type: 'pie',
            center: ['15%', '50%'],
            radius: ['20%', '39%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{b}\n{d}%'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '22',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
    value: 22899.21,
    name: '项目投资'
}, {
    value: 10173.25,
    name: '基础设施投资'
}, {
    value: 8226.78,
    name: '房地产开发投资'
}, {
    value: 5645.98,
    name: '住宅投资'
}
            ]
        },
        {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} 亿元({d}%)"
            },
            type: 'pie',
            center: ['40%', '50%'],
            radius: ['20%', '39%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{b}\n{d}%'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '22',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 11540.06,
                    name: '国有投资	'
                },

                {
                    value: 19585.93,
                    name: '非国有投资'
                },
                {
                    value: 18152.12 ,
                    name: '民间投资'
                }
            ]
        }



    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}