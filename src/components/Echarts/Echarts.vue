<template>
  <div>
    <div id="echartContainer" style="width:800px; height:500px"></div>
  </div>
</template>
/**
*@author ZhangJincheng
*@date 2018-7-26 11:01
*/
<script>
  export default {
    name:'line-chart',
    data () {
      return{}
    },
    mounted() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('echartContainer'));
      // 绘制图表
      myChart.setOption({
        title: {
          show:true,
          text: '柱状图',
          left:100,
          padding: [10,20,5,10]
        },
        legend: {},
        tooltip: {
          trigger: 'axis' //通过哪种方式触发tip
        },
        dataset: {
          // 提供一份数据。
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
          ]
        },
        xAxis: {
          type:'category'
        },
        yAxis: {},
        series: [
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'}
        ]
      });
    }
  }
</script>

<style></style>
