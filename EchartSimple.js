/**
 * 二次封装echarts
 * @author gpw
 *
 * @param title 主标题
 * @param subtitle 副标题
 * @param idName 要绘制的echarts的范围
 * @param dataName 图例
 * @param dataValue 图例值
 * @param type 类型 bar pie
 */
function EChartSimple({title = '未命名标题',subtitle = '未命名副标题',idName = 'null',dataName = [],dataValue=[]}={},type = 'bar') {
    this.title = title;
    this.subtitle = subtitle;
    this.idName = idName;
    this.dataName = dataName;
    this.dataValue = dataValue;
    this.type = type;

    /**
     * 对象自检 , 开发模式使用
     */
    this.init = function () {
        let successFlag = 1 ;
        if(this.dataName.length === 0){
            successFlag = 0;
            alert('未设置图例标题');
        }
        if(this.dataValue.length === 0){
            successFlag = 0;
            alert('未设置图例值');
        }
        if(this.idName === 'null'){
            successFlag = 0;
            alert('未选择echarts区域');
        }
        if(successFlag === 1 ){
            alert('自检完成执行下一步')
        }
    };

    /**
     * 自检完成使用
     */
    this.drawChart = function () {
        let chart = document.getElementById(this.idName);
        switch (this.type) {
            case "bar": this.drawBar(chart);break;
            case "pie": alert("未开发");break;
            default : this.drawBar(chart);
        }

    };

    /**
     * 柱状图
     * @param chart
     */
    this.drawBar = function(chart) {
        let option = {
            title: {
                text: this.title,
                subtext: this.subtitle
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: this.dataName,
            },
            series: [
                {
                    name: 'siori',
                    type: 'bar',
                    data: this.dataValue,
                    label: {
                        show: true,
                        position: 'right', // 在上方显示
                        distance: 20, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。
                        verticalAlign: 'middle',
                        textStyle: { // 数值样式
                            color: 'black',
                            fontSize: 12
                        }
                    },
                },
            ]
        };
        chart.setOption(option);
    }
}