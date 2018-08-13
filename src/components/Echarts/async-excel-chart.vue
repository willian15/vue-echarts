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
  </div>
</template>
/**
*@author ZhangJincheng
*@date 2018-7-26 11:01
*/
<script>
  import XLSX from "xlsx"

  export default {
    data() {
      return{
        imFile:'',
        excelData: []
      }
    },
    mounted() {
      this.imFile = document.getElementById('imFile');
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

          console.log(table);
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
        console.log(data);
        this.imFile.value = '';
        this.fullscreenLoading = false;
        if (data.length <= 0) {
          this.errorDialog = true
          this.errorMsg = '请导入正确信息'
        } else {
          this.excelData = data
        }
      }
    }

  }

</script>

<style></style>
