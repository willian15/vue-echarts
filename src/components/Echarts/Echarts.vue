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
          text: '折线图',
          left:100,
          padding: [10,20,5,10]
        },
        tooltip: {
          trigger: 'axis' //通过哪种方式触发tip
        },
        xAxis: {
          data: ["衬衫","qiuyi","雪纺衫","裤子","高跟鞋","袜子"],
          name:'产品'
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20],
          itemStyle:{
            normal:{
              color:'hotpink'
            }
          }
        }]
      });
    }
  }
</script>

<style></style>
