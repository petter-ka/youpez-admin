import {Component, OnInit} from '@angular/core'

import * as echarts from 'echarts'
import {getDummyModel} from "../../../../@youpez/data/dummy"

@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: ['./dashboard-default.component.scss']
})
export class DashboardDefaultComponent implements OnInit {

  public loaded = false
  public chartOptions = {}
  public chartOptions2 = {}
  public chartOptions3 = {}
  public chartOptions4 = {}
  public punchCardOpts = {}
  public gaugeOpts = {}
  public gaugeOpts2 = {}
  public gaugeOpts3 = {}
  public themeRiverOpts = {}
  public realtimeOpts = {}
  public model = getDummyModel()
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
  public subscriptions = [
    {
      month: 'january',
      count: '-111,333',
      up: false,
    },
    {
      month: 'february',
      count: '233,123',
      up: true,
    },
    {
      month: 'march',
      count: '543,854',
      up: true,
    },
    {
      month: 'april',
      count: '-99,112',
      up: false,
    },
    {
      month: 'may',
      count: '678,112',
      up: true,
    },
    {
      month: 'june',
      count: '891,451',
      up: true,
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
    this.createHistogram()
    this.createPunchCard()
    this.createGauge()
    this.createThemeRiver()
    this.createRealTime()
  }

  createHistogram() {
    const getSeries = (data) => {
      return data.map((points, index) => {
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
            color: index % 2 === 0 ? 'rgb(77, 137, 249)' : 'rgba(198,213,255,0.3)'
          }
        }
      })
    }

    const getXAxis = (data) => {
      return [...Array(data[0].length).keys()]
    }

    const data = [
      [10, 20, 30, 50, 55, 60, 23],
      [15, 40, 50, 20, 45, 20, 12],
    ]

    const data2 = [
      [6, 67, 30, 78, 99, 78, 60],
      [12, 12, 10, 33, 32, 40, 20],
    ]

    const data3 = [820, 1100, 600, 400]

    const data4 = [300, 790, 560, 1200]

    this.chartOptions3 = {
      animation: true,
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        containLabel: false,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        show: false,
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: [
        {
          data: data3,
          type: 'line',
          symbol: 'none',
          smooth: true,
          smoothMonotone: 'x',
          backgroundStyle: {
            color: 'transparent'
          },
          itemStyle: {
            color: 'rgb(249,23,6)'
          },
          areaStyle: {
            color: 'rgba(255,160,166,0.8)'
          }
        }
      ]
    }

    this.chartOptions4 = {
      animation: true,
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: [
        {
          data: data4,
          type: 'line',
          symbol: 'none',
          smooth: true,
          smoothMonotone: 'x',
          backgroundStyle: {
            color: 'transparent'
          },
          itemStyle: {
            color: 'rgb(8,180,0)'
          },
          areaStyle: {
            color: 'rgba(138,255,191,0.8)'
          }
        }
      ]
    }

    this.chartOptions = {
      animation: true,
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      xAxis: {
        type: 'category',
        data: getXAxis(data),
        show: false,
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: getSeries(data)
    }

    this.chartOptions2 = {
      animation: true,
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      xAxis: {
        type: 'category',
        data: getXAxis(data2),
        show: false,
      },
      yAxis: {
        type: 'value',
        show: false,

      },
      series: getSeries(data2)
    }
  }

  createRealTime() {
    var dataAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',]
    let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321,]
    let yMax = 500
    let dataShadow = []

    for (let i = 0; i < data.length; i++) {
      dataShadow.push(yMax)
    }

    this.realtimeOpts = {
      grid: {
        top: 10,
        right: 0,
        bottom: 3,
        left: 0,
        containLabel: true,
      },
      xAxis: {
        data: dataAxis,
        axisLabel: {
          inside: true,
          textStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#999'
          }
        }
      },
      series: [
        { // For shadow
          type: 'bar',
          itemStyle: {
            color: 'rgba(0,0,0,0.05)'
          },
          barGap: '-100%',
          barCategoryGap: '40%',
          data: dataShadow,
          animation: false
        },
        {
          type: 'bar',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#83bff6'},
                {offset: 0.5, color: '#188df0'},
                {offset: 1, color: '#188df0'}
              ]
            )
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#2378f7'},
                  {offset: 0.7, color: '#2378f7'},
                  {offset: 1, color: '#83bff6'}
                ]
              )
            }
          },
          data: data
        }
      ]
    }
  }

  createThemeRiver() {
    this.themeRiverOpts = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: 'rgba(0,0,0,0.2)',
            width: 1,
            type: 'solid'
          }
        }
      },
      legend: {
        show: true,
        data: ['AD-FB', 'AD-TWTR', 'AD-GOOGL']
      },
      singleAxis: {
        top: 50,
        bottom: 50,
        axisTick: {},
        axisLabel: {},
        type: 'time',
        axisPointer: {
          animation: true,
          label: {
            show: true
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            opacity: 0.2
          }
        }
      },
      series: [
        {
          type: 'themeRiver',
          emphasis: {
            itemStyle: {
              shadowBlur: 20,
              shadowColor: 'rgba(0, 0, 0, 0.8)'
            }
          },
          data: [
            ['2020/12/08', 10, 'AD-FB'], ['2020/12/09', 15, 'AD-FB'], ['2020/12/10', 35, 'AD-FB'],
            ['2020/12/11', 38, 'AD-FB'], ['2020/12/12', 22, 'AD-FB'], ['2020/12/13', 16, 'AD-FB'],
            ['2020/12/14', 7, 'AD-FB'], ['2020/12/15', 2, 'AD-FB'], ['2020/12/16', 17, 'AD-FB'],
            ['2020/12/17', 33, 'AD-FB'], ['2020/12/18', 40, 'AD-FB'], ['2020/12/19', 32, 'AD-FB'],
            ['2020/12/20', 26, 'AD-FB'], ['2020/12/21', 35, 'AD-FB'], ['2020/12/22', 40, 'AD-FB'],
            ['2020/12/23', 32, 'AD-FB'], ['2020/12/24', 26, 'AD-FB'], ['2020/12/25', 22, 'AD-FB'],
            ['2020/12/26', 16, 'AD-FB'], ['2020/12/27', 22, 'AD-FB'], ['2020/12/28', 10, 'AD-FB'],
            ['2020/12/08', 35, 'AD-TWTR'], ['2020/12/09', 36, 'AD-TWTR'], ['2020/12/10', 37, 'AD-TWTR'],
            ['2020/12/11', 22, 'AD-TWTR'], ['2020/12/12', 24, 'AD-TWTR'], ['2020/12/13', 26, 'AD-TWTR'],
            ['2020/12/14', 34, 'AD-TWTR'], ['2020/12/15', 21, 'AD-TWTR'], ['2020/12/16', 18, 'AD-TWTR'],
            ['2020/12/17', 45, 'AD-TWTR'], ['2020/12/18', 32, 'AD-TWTR'], ['2020/12/19', 35, 'AD-TWTR'],
            ['2020/12/20', 30, 'AD-TWTR'], ['2020/12/21', 28, 'AD-TWTR'], ['2020/12/22', 27, 'AD-TWTR'],
            ['2020/12/23', 26, 'AD-TWTR'], ['2020/12/24', 15, 'AD-TWTR'], ['2020/12/25', 30, 'AD-TWTR'],
            ['2020/12/26', 35, 'AD-TWTR'], ['2020/12/27', 42, 'AD-TWTR'], ['2020/12/28', 42, 'AD-TWTR'],
            ['2020/12/08', 10, 'AD-GOOGL'], ['2020/12/09', 15, 'AD-GOOGL'], ['2020/12/10', 35, 'AD-GOOGL'],
            ['2020/12/11', 38, 'AD-GOOGL'], ['2020/12/12', 22, 'AD-GOOGL'], ['2020/12/13', 16, 'AD-GOOGL'],
            ['2020/12/14', 7, 'AD-GOOGL'], ['2020/12/15', 2, 'AD-GOOGL'], ['2020/12/16', 17, 'AD-GOOGL'],
            ['2020/12/17', 33, 'AD-GOOGL'], ['2020/12/18', 4, 'AD-GOOGL'], ['2020/12/19', 32, 'AD-GOOGL'],
            ['2020/12/20', 26, 'AD-GOOGL'], ['2020/12/21', 35, 'AD-GOOGL'], ['2020/12/22', 40, 'AD-GOOGL'],
            ['2020/12/23', 32, 'AD-GOOGL'], ['2020/12/24', 26, 'AD-GOOGL'], ['2020/12/25', 22, 'AD-GOOGL'],
            ['2020/12/26', 16, 'AD-GOOGL'], ['2020/12/27', 22, 'AD-GOOGL'], ['2020/12/28', 10, 'AD-GOOGL']
          ]
        }
      ]
    }
  }

  createGauge() {
    this.gaugeOpts = this.getGauge({
      value: 52.32,
      name: 'EU'
    })
    this.gaugeOpts2 = this.getGauge({
      value: 78.11,
      name: 'US'
    })
    this.gaugeOpts3 = this.getGauge({
      value: 11.21,
      name: 'EU'
    })
  }

  getGauge(data) {

    let colorStops = [{
      offset: 0,
      color: 'rgba(51,227,189,1)' // 0%
    }, {
      offset: 1,
      color: 'rgba(51,227,189,.1)' // 100%
    }]

    if (data.value > 50 && data.value < 70) {
      colorStops = [{
        offset: 0,
        color: 'rgb(227,177,51)' // 0%
      }, {
        offset: 1,
        color: 'rgba(134,96,35,.3)' // 100%
      }]
    }

    if (data.value > 70) {
      colorStops = [{
        offset: 0,
        color: 'rgb(227,51,66)' // 0%
      }, {
        offset: 1,
        color: 'rgba(134,35,78,.3)' // 100%
      }]
    }

    return {
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
              fontFamily: '微软雅黑',
              fontSize: 25,
            },
            key: {
              fontWeight: 'bold',
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
          colorStops: colorStops,
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
            color: 'rgba(237, 237, 237,0.6)'
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
            borderColor: 'rgba(237, 237, 237,0.8)',
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
        text: '',
        link: ''
      },
      tooltip: {
        position: 'top',
        formatter: function (params) {
          return params.value[2] + ' users in ' + hours[params.value[0]] + ' of ' + days[params.value[1]]
        }
      },
      grid: {
        left: 2,
        bottom: 0,
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
