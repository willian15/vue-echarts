<template>
  <div id="app">
    <!--创建一个echarts的容器-->
    <!--<div id="echartContainer" style="width:500px; height:500px"></div>-->
    <!--<Chart></Chart>-->
    <!--<Echarts></Echarts>-->
    <!--<Guage></Guage>-->
    <!--<Radar></Radar>-->
    <!--<Pie></Pie>-->
    <Bar></Bar>
  </div>
</template>

<script>
//  import Chart from "./components/Chart.vue";
  import Echarts from "./components/Echarts/Echarts.vue"
  import Guage from "./components/Echarts/Guage.vue"
  import Radar from "./components/Echarts/Radar.vue"
  import Pie from "./components/Echarts/Pie.vue"
  import Bar from "./components/Echarts/async-bar-chart.vue"
  export default {
    name: "App",
    data() {},
    components: {
//      Chart,
      Echarts,
      Guage,
      Radar,
      Pie,
      Bar
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
