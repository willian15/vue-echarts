<template>
    <div>
      <div id="datasetContainer" style="width:500px; height:500px"></div>
    </div>
</template>
/**
*@author ZhangJincheng
*@date 2018-7-30 15:07
*/
<script type="text/ecmascript-6">
  import {option} from '../../config/dataset'
  export default {
    name: '',
    data () {
      return {

      }
    },
    methods: {
      drawBarChart() {
        //初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('datasetContainer'));
        //绘制基本图表
        myChart.setOption(option);

        this.$http.get('static/data/dataset.json').then(res => {
          setTimeout(()=>{  //未来让加载动画效果明显,这里加入了setTimeout,实现2s延时
            myChart.hideLoading(); //隐藏加载动画
            myChart.setOption({
              series: [{
                source: res.data
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
