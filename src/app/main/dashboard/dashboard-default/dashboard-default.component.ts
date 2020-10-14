import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: ['./dashboard-default.component.scss']
})
export class DashboardDefaultComponent implements OnInit {

  public loaded = false
  public chartOptions = {}
  public punchCardOpts = {}
  public gaugeOpts = {}

  public model = {
    header: [
      {data: "Name"},
      {data: "Country"},
      {data: "Goals"},
    ],
    data: [
      [{data: 'Jon Doe'}, {data: 'USA'}, {data: 11}],
      [{data: 'Philip Jones'}, {data: 'Australia'}, {data: 9}],
      [{data: 'Doe Jane'}, {data: 'Canada'}, {data: 110}],
      [{data: 'Buck Jones'}, {data: 'Mexico'}, {data: 56}],
      [{data: 'Jon Doe'}, {data: 'USA'}, {data: 11}],
      [{data: 'Philip Jones'}, {data: 'Australia'}, {data: 9}],
      [{data: 'Doe Jane'}, {data: 'Canada'}, {data: 110}],
      [{data: 'Buck Jones'}, {data: 'Mexico'}, {data: 56}],
      [{data: 'Jon Doe'}, {data: 'USA'}, {data: 11}],
      [{data: 'Philip Jones'}, {data: 'Australia'}, {data: 9}],
      [{data: 'Doe Jane'}, {data: 'Canada'}, {data: 110}],
      [{data: 'Buck Jones'}, {data: 'Mexico'}, {data: 56}],
      [{data: 'Jon Doe'}, {data: 'USA'}, {data: 11}],
      [{data: 'Philip Jones'}, {data: 'Australia'}, {data: 9}],
      [{data: 'Doe Jane'}, {data: 'Canada'}, {data: 110}],
      [{data: 'Buck Jones'}, {data: 'Mexico'}, {data: 56}]
    ]
  }

  public comboboxItems = [
    {
      content: "one"
    },
    {
      content: "two"
    },
    {
      content: "three"
    },
    {
      content: "four"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
    const data = [
      [10, 20, 30, 50, 55, 60, 23],
      [15, 40, 50, 20, 45, 20, 12],
    ]
    const series = data.map((points, index) => {
      return {
        data: points,
        stack: 'stackGroup',
        type: 'bar',
        barCategoryGap: 0.1,
        showBackground: true,
        backgroundStyle: {
          color: 'transparent'
        },
        itemStyle: {
          color: index % 2 === 0 ? 'rgb(77, 137, 249)' : 'rgba(198,213,255,0.7)'
        }
      }
    })
    const xAxisCategories = [...Array(data[0].length).keys()] // this is "hack", because this option split the bars
    this.chartOptions = {
      animation: false,
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      xAxis: {
        type: 'category',
        data: xAxisCategories,
        show: false,
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: series
    }
    console.log(this.chartOptions)

    this.createPunchCard()
    this.createGauge()
  }

  createGauge() {

    let data = {
      value: 52.32,
      name: '完成率'
    }

    this.gaugeOpts = {
      backgroundColor: 'transparent',
      title: {
        text: '{num|' + data.value + '}{key| %}',
        subtext: data.name,
        x: '49%',
        y: '46%',
        textAlign: 'center',
        textStyle: {
          rich: {
            num: {
              fontWeight: 'bold',
              color: '#1c1c1c',
              fontFamily: '微软雅黑',
              fontSize: 25,
            },
            key: {
              fontWeight: 'bold',
              color: '#1c1c1c',
              fontFamily: '微软雅黑',
              fontSize: 15,
            }
          }

        },
        subtextStyle: {
          lineHeight: 30,
          fontSize: 15
        }
      },
      data: [{
        name: data.name,
      }],
      series: [{ // 主圆环
        name: data.name,
        type: 'pie',
        radius: ['70%', '90%'],
        startAngle: 225,
        color: [{
          type: 'linear',
          x: 1,
          y: 0,
          x2: 0,
          y2: 0,
          colorStops: [{
            offset: 0,
            color: 'rgba(51,227,189,1)' // 0% 处的颜色
          }, {
            offset: 1,
            color: 'rgba(51,227,189,.1)' // 100% 处的颜色
          }]
        }, 'transparent'],
        hoverAnimation: true,
        legendHoverLink: false,
        z: 10,
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [{
          value: 75 * data.value / 100
        }, {
          value: 100 - (75 * data.value / 100)
        }]
      }, { // 背景圆环
        name: '',
        type: 'pie',
        radius: ['70%', '90%'],
        silent: true,
        startAngle: 225,
        labelLine: {
          normal: {
            show: false
          }
        },
        z: 5,
        data: [{
          value: 75,
          itemStyle: {
            color: '#eee'
          }
        }, {
          value: 25,
          itemStyle: {
            color: 'transparent'
          }
        }]
      }, { // 中间圈
        name: '',
        z: 5,
        type: 'pie',
        cursor: 'default',
        radius: ['65%', '65%'],
        startAngle: 225,
        hoverAnimation: false,
        legendHoverLink: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [{
          value: 75,
          itemStyle: {
            borderColor: 'rgb(167,166,169)',
            borderType: 'dashed'
          }
        }, {
          value: 25,
          itemStyle: {
            color: 'transparent'
          }
        }]
      }]
    }
  }

  createPunchCard() {

    const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
      '7a', '8a', '9a', '10a', '11a',
      '12p', '1p', '2p', '3p', '4p', '5p',
      '6p', '7p', '8p', '9p', '10p', '11p']
    const days = ['Friday', 'Thursday',
      'Wednesday', 'Tuesday', 'Monday']

    let data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]]
    data = data.map(function (item) {
      return [item[1], item[0], item[2]]
    })

    this.punchCardOpts = {
      title: {
        text: 'Punch Card of Github',
        link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
      },
      legend: {
        data: ['Punch Card'],
        left: 'right'
      },
      tooltip: {
        position: 'top',
        formatter: function (params) {
          return params.value[2] + ' commits in ' + hours[params.value[0]] + ' of ' + days[params.value[1]]
        }
      },
      grid: {
        left: 2,
        bottom: 10,
        right: 20,
        top: 0,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: hours,
        boundaryGap: false,
        splitLine: {
          show: true,
          lineStyle: {
            color: '#999',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          fontSize: 10,
        }
      },
      yAxis: {
        type: 'category',
        data: days,
        axisLine: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#efefef',
            type: 'dashed'
          }
        },
        axisLabel: {
          fontSize: 10,
        }
      },
      series: [{
        name: 'Punch Card',
        type: 'scatter',
        symbolSize: function (val) {
          return val[2] * 2
        },
        data: data,
        animationDelay: function (idx) {
          return idx * 5
        }
      }]
    }
  }
}
