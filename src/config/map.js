/**
 *@author ZhangJincheng
 */
export const option = {
  backgroundColor: '#263343',
  title: {
    text: '',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {},
  legend: {
    orient: 'vertical',
    top: '90%',
    left: '80%',
    textStyle: {
      color: '#fff'
    }
  },
  geo: {
    map: 'self_def_map',
    label: {
      emphasis: {
        show: false
      }
    },
    roam: true,
    itemStyle: {
      normal: {
        show: true,
        areaColor: '#263343',
        borderColor: '#de177f'
      },
      emphasis: {
        show: true,
        areaColor: '#263343'
      }
    }
  }
};
