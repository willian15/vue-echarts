<template>
  <div id="app">
    <!--<Chart></Chart>-->
    <!--<Echarts></Echarts>-->
    <!--<Guage></Guage>-->
    <!--<Radar></Radar>-->
    <!--<Pie></Pie>-->
    <!--<Bar></Bar>-->
    <!--<ex></ex>-->
    <ex_test></ex_test>
    <!--<DataSet></DataSet>-->
  </div>
</template>

<script>
//  import Chart from "./components/Chart.vue";
  import Echarts from "./components/Echarts/Echarts.vue"
  import Guage from "./components/Echarts/Guage.vue"
  import Radar from "./components/Echarts/Radar.vue"
  import Pie from "./components/Echarts/Pie.vue"
  import Bar from "./components/Echarts/async-bar-chart.vue"
  import DataSet from "./components/Echarts/DataSet.vue"
  import ex from "./components/Echarts/async-excel-chart.vue"
  import ex_test from "./components/Echarts/async-excel-test.vue"
  import exc from "./components/Echarts/excel.vue"
  export default {
    name: "App",
    components: {
//      Chart,
      Echarts,
      Guage,
      Radar,
      Pie,
      Bar,
      DataSet,
      ex,
      exc,
      ex_test
    }
  }
</script>

<style>
  .app{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }
</style>
