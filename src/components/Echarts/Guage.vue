<template>
    <div>
      <div id="gaugeContainer" style="width:500px; height:500px"></div>
    </div>
</template>
/**
*@author ZhangJincheng

*/
<script type="text/ecmascript-6">
  import {option} from '../../config/guage-option'
  export default {
    name: '',
    data () {
      return {

      }
    },
    mounted() {
      let myChart = this.$echarts.init(document.getElementById('gaugeContainer'));
      myChart.setOption(option);
    }
  }

</script>

<style>

</style>
