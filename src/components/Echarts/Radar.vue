<template>
    <div>
      <div id="radarContainer" style="width: 900px;height: 600px"></div>
    </div>
</template>
/**
*@author ZhangJincheng

*/
<script type="text/ecmascript-6">
  import {option} from "../../config/radar-option"
    export default {
      name:'',
      data() {
        return{

        }
      },
      mounted() {
        let myChart = this.$echarts.init(document.getElementById('radarContainer'));
        myChart.setOption(option);
      }
    }
</script>

<style>

</style>
