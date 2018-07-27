/**
 *@author ZhangJincheng
 *@date 2018-7-27 10:48
 */

export const option = {
  title: { text: '异步加载-简单饼状图' },
  tooltip: {},
  xAxis: {
    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
    name: '产品'
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [],
    itemStyle: {
      normal: {
        color: 'hotpink'
      }
    }
  }]
};
