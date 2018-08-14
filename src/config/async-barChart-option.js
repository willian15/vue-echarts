/**
 *@author ZhangJincheng
 *@date 2018-7-27 10:48
 */

export const option = {
  title: { text: 'demo简单柱状图' },
  tooltip: {},
  xAxis: {
    data: [],
    name: ''
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [],
    color:['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
  }]
};
