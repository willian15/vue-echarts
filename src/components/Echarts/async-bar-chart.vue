<template>
    <div>
      <div id="barContainer" style="width:800px; height:600px"></div>
    </div>
</template>
/**
*@author ZhangJincheng
*/
<script type="text/ecmascript-6">
  import {option} from '../../config/async-barChart-option'
  export default {
    name:'',
    data(){
      return{

      }
    },
    methods: {
      drawBarChart() {
        //初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('barContainer'));
        //绘制基本图表
        myChart.setOption(option);

        this.$http.get('static/data/asyncBarChart.json').then(res => {
          console.log(res);
          setTimeout(()=>{  //未来让加载动画效果明显,这里加入了setTimeout,实现2s延时
            myChart.hideLoading(); //隐藏加载动画
            myChart.setOption({
              xAxis:{
                data:res.data.categories,
                name:res.data.a
              },
              series: [{
                data: res.data.product
              }]
            })
          }, 1000 );
        })
      }
    },
    mounted() {
      //在钩子函数中，调用methods中drawBarChart的方法
      this.drawBarChart();
    }
  }
</script>

<style>

</style>
