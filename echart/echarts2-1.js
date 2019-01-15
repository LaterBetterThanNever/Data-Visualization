// 必须修改好id 并记录下来！
var myChart = echarts.init(document.getElementById('chart2-1'));
var app = {};
option = null;
app.title = '正负条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['财政总收入','#地方财政收入','财政支出']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年']
        }
    ],
    series : [
        {
            name:'#地方财政收入',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[2608.47,3150.80,3441.23,3796.92,4122.02,4809.94,5301.98,5804.38]
        },
        {
            name:'财政总收入',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[4895.41,5925.00,6408.49,6908.41,7521.70,8549.47,9225.07,10301.16]
        },
        {
            name:'财政支出',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data:[-3207.88,-3842.59,-4161.88,-4730.47,-5159.57,-6645.98,-6974.25,-7530.32]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}