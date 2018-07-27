<template>
    <div>
      <div id="pieContainer" style="width: 600px;height: 600px"></div>
    </div>
</template>
/**
*@author ZhangJincheng
*@date 2018-7-27 10:23
*/
<script type="text/ecmascript-6">
  import {option} from "../../config/pie-option"

  export default {
    name: '',
    data() {
      return{

      }
    },
    mounted() {
      let myChart = this.$echarts.init(document.getElementById('pieContainer'));
      myChart.setOption(option);
    }
  };
</script>

<style>

</style>
