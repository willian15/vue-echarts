/**
 *@author ZhangJincheng
 *@date 2019-7-7 10:48
 */

export const option = {
  title: { text: '简单柱状图' },
  tooltip: {},
  xAxis: {
    data: [],
    name: ''
  },
  yAxis: {
    name:'人数'
  },
  series: [{
    name: '人数',
    type: 'bar',
    data: [],
    color:['#579ea8','#2f4554', '#cb6baa', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
  }]
};
