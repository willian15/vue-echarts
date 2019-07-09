/**
 *@author ZhangJincheng
 */
export const option = {
  backgroundColor: '#044161',
  title: {
    text: '新疆主要旅游景点及其评论数分布',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {},
  legend: {
    orient: 'vertical',
    top: '90%',
    left: '80%' ,
    data: ['评论数'],
    textStyle: {
      color: '#fff'
    }
  },
  geo: {
    map: '新疆',
    label: {
      emphasis: {
        show: false
      }
    },
    roam: true,
    itemStyle: {
      normal: {
        show: true,
        areaColor: '#3366cc',
        borderColor: '#FFFFFF'
      },
      emphasis: {
        show: true,
        areaColor: '#2a333d'
      }
    }
  },
  series: [
    {
      name: '评论数',
      type: 'scatter',
      coordinateSystem: 'geo',
      // data: point,//调用数据
      data : [],
      // symbolSize: function (val) {
      //   // console.log(val)
      //   return Math.log(val[2]) * 1.5;
      // },

      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: false
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#ffff99'
        }
      }

    }]
};
