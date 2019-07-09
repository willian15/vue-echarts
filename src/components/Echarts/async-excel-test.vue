<template>
  <div>
    <!--<input type="file" @change="importFile(this)" id="imFile" style="display: none"/>-->
    <!--<el-button class="button" @click="uploadFile()">导入</el-button>-->
    <!--<el-table :data="excelData" tooltip-effect="dark">-->
      <!--<el-table-column label="名称" prop="name" show-overflow-tooltip></el-table-column>-->
      <!--<el-table-column label="经度" prop="lng" show-overflow-tooltip></el-table-column>-->
      <!--<el-table-column label="纬度" prop="lat" show-overflow-tooltip></el-table-column>-->
      <!--<el-table-column label="信息" prop="info" show-overflow-tooltip></el-table-column>-->
    <!--</el-table>-->
    <div id="barContainer" style="width: 100%; height: 800px"></div>
  </div>
</template>
/**
*@author ZhangJincheng
*/
<script>
  import XLSX from "xlsx"
  import {option} from '../../config/map'
  import map from '../../config/rongchang.json'

  export default {
    data() {
      return{

      }
    },

    methods:{
      drawChart:function () {
//        console.log(point);
        let myChart = this.$echarts.init(document.getElementById('barContainer'));
        this.$echarts.registerMap('self_def_map', map);

        myChart.setOption(option);
      }
    },
    mounted() {
      this.drawChart();
    }
  }

</script>

<style></style>
