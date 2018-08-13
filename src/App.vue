<template>
  <div id="app">
    <!--创建一个echarts的容器-->
    <!--<div id="echartContainer" style="width:500px; height:500px"></div>-->
    <!--<Chart></Chart>-->
    <!--<Echarts></Echarts>-->
    <!--<Guage></Guage>-->
    <!--<Radar></Radar>-->
    <!--<Pie></Pie>-->
    <!--<Bar></Bar>-->
    <ex></ex>
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
  import exc from "./components/Echarts/excel.vue"
  export default {
    name: "App",
    data() {},
    components: {
//      Chart,
      Echarts,
      Guage,
      Radar,
      Pie,
      Bar,
      DataSet,
      ex,
      exc
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
