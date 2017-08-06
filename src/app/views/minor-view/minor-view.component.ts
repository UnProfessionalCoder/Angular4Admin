import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-minorview',
  templateUrl: 'minor-view.template.html'
})
export class MinorViewComponent implements OnInit {
  option4 = {
    title: {
      text: '漏斗图',
      subtext: '纯属虚构'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {}
      }
    },
    legend: {
      data: ['展现', '点击', '访问', '咨询', '订单']
    },
    series: [
      {
        name: '预期',
        type: 'funnel',
        left: '10%',
        width: '80%',
        label: {
          normal: {
            formatter: '{b}预期'
          },
          emphasis: {
            position: 'inside',
            formatter: '{b}预期: {c}%'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            opacity: 0.7
          }
        },
        data: [
          {value: 60, name: '访问'},
          {value: 40, name: '咨询'},
          {value: 20, name: '订单'},
          {value: 80, name: '点击'},
          {value: 100, name: '展现'}
        ]
      },
      {
        name: '实际',
        type: 'funnel',
        left: '10%',
        width: '80%',
        maxSize: '80%',
        label: {
          normal: {
            position: 'inside',
            formatter: '{c}%',
            textStyle: {
              color: '#fff'
            }
          },
          emphasis: {
            position: 'inside',
            formatter: '{b}实际: {c}%'
          }
        },
        itemStyle: {
          normal: {
            opacity: 0.5,
            borderColor: '#fff',
            borderWidth: 2
          }
        },
        data: [
          {value: 30, name: '访问'},
          {value: 10, name: '咨询'},
          {value: 5, name: '订单'},
          {value: 50, name: '点击'},
          {value: 80, name: '展现'}
        ]
      }
    ]
  };
  option5 = {
    title: {
      text: '漏斗图',
      subtext: '纯属虚构',
      left: 'left',
      top: 'bottom'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
      orient: 'vertical',
      top: 'center',
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {}
      }
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['展现', '点击', '访问', '咨询', '订单']
    },
    calculable: true,
    series: [
      {
        name: '漏斗图',
        type: 'funnel',
        width: '40%',
        height: '45%',
        left: '5%',
        top: '50%',
        data: [
          {value: 60, name: '访问'},
          {value: 30, name: '咨询'},
          {value: 10, name: '订单'},
          {value: 80, name: '点击'},
          {value: 100, name: '展现'}
        ]
      },
      {
        name: '金字塔',
        type: 'funnel',
        width: '40%',
        height: '45%',
        left: '5%',
        top: '5%',
        sort: 'ascending',
        data: [
          {value: 60, name: '访问'},
          {value: 30, name: '咨询'},
          {value: 10, name: '订单'},
          {value: 80, name: '点击'},
          {value: 100, name: '展现'}
        ]
      },
      {
        name: '漏斗图',
        type: 'funnel',
        width: '40%',
        height: '45%',
        left: '55%',
        top: '5%',
        label: {
          normal: {
            position: 'left'
          }
        },
        data: [
          {value: 60, name: '访问'},
          {value: 30, name: '咨询'},
          {value: 10, name: '订单'},
          {value: 80, name: '点击'},
          {value: 100, name: '展现'}
        ]
      },
      {
        name: '金字塔',
        type: 'funnel',
        width: '40%',
        height: '45%',
        left: '55%',
        top: '50%',
        sort: 'ascending',
        label: {
          normal: {
            position: 'left'
          }
        },
        data: [
          {value: 60, name: '访问'},
          {value: 30, name: '咨询'},
          {value: 10, name: '订单'},
          {value: 80, name: '点击'},
          {value: 100, name: '展现'}
        ]
      }
    ]
  };

  constructor() {

  }

  ngOnInit() {
  }
}
