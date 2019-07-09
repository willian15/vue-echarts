<template>
    <div>
      <div id='main' style='height:700px;width:1000px'></div>
    </div>
</template>
/**
*@author ZhangJincheng

*/
<script type="text/ecmascript-6">
    import {option} from "../../config/geomap";

    export default {
      name : '',
      data() {
        return{}
      },
      mounted() {
        let myChart = this.$echarts.init(document.getElementById('main'));
        myChart.setOption(option);
      }
    }
</script>

<style>

</style>
