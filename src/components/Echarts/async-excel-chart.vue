<template>
  <div>
    <input type="file" @change="importFile(this)" id="imFile" style="display: none"/>
    <el-button class="button" @click="uploadFile()">导入</el-button>
    <el-table :data="excelData" tooltip-effect="dark">
      <el-table-column label="名称" prop="name" show-overflow-tooltip></el-table-column>
      <el-table-column label="经度" prop="lng" show-overflow-tooltip></el-table-column>
      <el-table-column label="纬度" prop="lat" show-overflow-tooltip></el-table-column>
      <el-table-column label="信息" prop="info" show-overflow-tooltip></el-table-column>
    </el-table>
    <div id="barContainer" style="width:800px; height:600px;"></div>
  </div>
</template>
/**
*@author ZhangJincheng

*/
<script>
  import XLSX from "xlsx"
  import {option} from '../../config/geomap'
  import xj from '../../config/boundary/XJboundary.json'

  export default {
    data() {
      return{
        imFile:'',
        excelData: []
      }
    },
    mounted() {
      this.imFile = document.getElementById('imFile');
      this.drawBarChart();
    },
    methods:{
      uploadFile:function () {
        this.imFile.click()
      },
      importFile:function() {
        let wb;//读取完成的数据
        let rABS = false; //是否将文件读取为二进制字符串
        let obj = this.imFile;
//        let table = [];
        if (!obj.files) {
          return;
        }
        let f = obj.files[0];
        let reader = new FileReader();
        let $this = this;
        reader.onload = function (e) {
          let data = e.target.result;

          if (rABS) {
            wb = XLSX.read(btoa(fixdata(data)), {//手动转化
              type: 'base64'
            });
          } else {
            wb = XLSX.read(data, {
              type: 'binary'
            });
          }

          let table = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);


          $this.dealFile($this.analyzeData(table)); // analyzeData: 解析导入数据
          $this.jsonData(table);

        };

        if(rABS) {
          reader.readAsArrayBuffer(f);
        } else {
          reader.readAsBinaryString(f);
        }
      },
      analyzeData: function (data) {  // 此处可以解析导入数据
        return data
      },
      dealFile: function (data) {   // 处理导入的数据
//        console.log(data);
        this.imFile.value = '';
        this.fullscreenLoading = false;
        if (data.length <= 0) {
          this.errorDialog = true;
          this.errorMsg = '请导入正确信息'
        } else {
          this.excelData = data
        }
      },
      jsonData:function (data) {  // 构造echarts指定的数据结构
//        console.log(data)
        let $this = this;
        let point = [];
        let geoArr = [];
        for (let i in data) {
          let name = data[i]['name'];
          let info = data[i]['info'];
          let lng = data[i]['lng'];
          let lat = data[i]['lat'];
          let geo = [];
          geo.push(parseFloat(lng),parseFloat(lat));
//          console.log(info)
//          console.log(geo)
          geoArr.push(geo);
          point.push({'name':name,'value':geo.concat(parseFloat(info))})
        }
        console.log(point);
        $this.drawBarChart(point);
      },
      drawBarChart:function (point) {
//        console.log(point);
        let myChart = this.$echarts.init(document.getElementById('barContainer'));
        this.$echarts.registerMap('新疆', xj);
        myChart.setOption(option);
        myChart.setOption({
          series: [
            {
              name: '评论数',
              type: 'scatter',
              coordinateSystem: 'geo',
              data: point,//调用数据
            }]
        })
      }
    }

  }

</script>

<style></style>
