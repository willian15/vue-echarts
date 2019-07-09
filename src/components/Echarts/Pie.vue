<template>
    <div>
      <div id="pieContainer" style="width: 600px;height: 600px"></div>
    </div>
</template>
/**
*@author ZhangJincheng

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
